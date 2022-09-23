from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

app_name = 'api_auth'

urlpatterns = [
    path('signup', views.SignUpView.as_view()),
    path('signin', views.SignInView.as_view()),
    path('getme', views.GetMeView.as_view()),
    path('signout', views.SignOutView.as_view()),
    path('token-refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]