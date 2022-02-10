from rest_framework import serializers
from .models import NewUser, Post, Like


class UserSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = NewUser
        fields = ('id', 'password', 'last_login', 'is_superuser', 'email',
                  'user_name', 'first_name', 'start_date', 'about', 'posts',)


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
        queryset=NewUser.objects.all(),
        source='user'
    )

    class Meta:
        model = Post
        fields = ('id', 'user_id', 'user', 'content', 'image', 'likes',)


class LikeSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        read_only=True
    )
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=NewUser.objects.all(),
        source='user'
    )
    post_id = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all(),
        source='post'
    )

    class Meta:
        model = Like
        fields = ('id', 'user_id', 'post_id', 'user', 'post',)


# This block of code was taken from https://www.youtube.com/watch?v=AfYfvjP1hK8&ab_channel=VeryAcademy
class RegisterUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewUser
        fields = ('id', 'email', 'user_name', 'password',)
        extra_kwarg = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
