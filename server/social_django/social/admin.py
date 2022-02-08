from django.contrib import admin

# Register your models here.

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import NewUser, Post, Like

admin.site.register(NewUser)
admin.site.register(Post)
admin.site.register(Like)