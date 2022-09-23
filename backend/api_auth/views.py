import re
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import  Response
from rest_framework.views import APIView
from .utils import get_tokens_for_user
from .serializers import RegistrationSerializer
from .models import MyUser

# Create your views here.


class SignUpView(APIView):
    authentication_classes = []

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignInView(APIView):
    authentication_classes = []

    def post(self, request):

        if 'email' not in request.data or 'password' not in request.data:
            return Response({'msg': 'Credentials missing'}, status=status.HTTP_400_BAD_REQUEST)
        print('----', request.data)
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            auth_data = get_tokens_for_user(request.user)
            return Response({'msg': 'Login Success', 'email': email, **auth_data}, status=status.HTTP_200_OK)
            
        return Response({'msg': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)



class SignOutView(APIView):
    authentication_classes = []

    def post(self, request):
        if 'email' not in request.data:
            return Response({'msg': 'Credentials missing'}, status=status.HTTP_400_BAD_REQUEST)
        
        email = request.data.get('email')
        logout(request)
        return Response({'msg': 'Successfully Logged out', 'email': email}, status=status.HTTP_200_OK)



class GetMeView(APIView):

    def post(self, request):
        if 'email' not in request.data:
            return Response({'msg': 'Credentials missing'}, status=status.HTTP_400_BAD_REQUEST)

        email = request.data.get('email') 
        return Response(MyUser.objects.filter(email = email).values(), status=status.HTTP_200_OK)
    





