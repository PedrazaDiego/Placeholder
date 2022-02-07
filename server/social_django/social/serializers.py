from rest_framework import serializers
from .models import User, Post, Like


class UserSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        many=True,
        read_only=True
    )

    # post_id = serializers.PrimaryKeyRelatedField(
    #     queryset=Post.objects.all(),
    #     source='post'
    # )

    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'password', 'posts',)


class PostSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    likes = serializers.HyperlinkedRelatedField(
        view_name='like_detail',
        many=True,
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    class Meta:
        model = Post
        fields = ('id', 'user_id', 'user', 'content', 'image', 'likes',)


class LikeSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        many=True,
        read_only=True
    )
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    post_id = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all(),
        source='post'
    )

    class Meta:
        model = Like
        fields = ('id', 'user_id', 'post_id', 'user', 'post',)
