from django.urls import path
from . import views
from .views import CustomUserCreate
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [

    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),

    path('posts/', views.PostList.as_view(), name="post_list"),
    path('posts/<int:pk>', views.PostDetail.as_view(), name="post_detail"),

    path('likes/', views.LikeList.as_view(), name="like_list"),
    path('likes/<int:pk>', views.LikeDetail.as_view(), name="like_detail"),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/register', CustomUserCreate.as_view(), name='create_user'),

]
