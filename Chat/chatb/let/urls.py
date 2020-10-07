from django.contrib import admin
from django.urls import path, include
from .views import LoginUser, MessageGet


urlpatterns = [
    path('u/', LoginUser.as_view()),
    path('m/', MessageGet.as_view()),    
]
