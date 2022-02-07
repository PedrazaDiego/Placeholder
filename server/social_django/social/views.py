from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .serializers import UserSerializer, PostSerializer, LikeSerializer
from .models import User, Post, Like

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class =UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostList(generics.ListCreateAPIView): 
    queryset = Post.objects.all() 
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Post.objects.all() 
    serializer_class = PostSerializer 

class LikeList(generics.ListCreateAPIView): 
    queryset = Like.objects.all() 
    serializer_class = LikeSerializer

class LikeDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Like.objects.all() 
    serializer_class = LikeSerializer 