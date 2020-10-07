from django.contrib import admin
from .models import User, MessageChat

admin.site.register(MessageChat)
admin.site.register(User)