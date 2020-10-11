from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from django.http import HttpResponse
from django.contrib.auth import authenticate
from .models import User, MessageChat
from .serializers import UserSer, MCSer, FilterSer
import json


class LoginUser(APIView):
    def get(self, request):
        users = User.objects.all()

        serializerUser = UserSer(users, many=True)
        return Response ({
            "user" : serializerUser.data,
        })



class MessageGet(APIView):
    def get(self, request):
        filters = {}
        filters['messages'] = MessageChat.objects.all()
        filters['users'] = User.objects.all()

        serial = FilterSer(filters)
        return Response ({
            "data":serial.data
        })

    def post(self, request):
        message = request.data.get('message')
        
        serializerPost =  MCSer(data=message)

        if serializerPost.is_valid(raise_exception=True):
            post_saved = serializerPost.save()

        return Response({
            "success": "Post '{}' created successfully".format(post_saved.content_post)
        })
