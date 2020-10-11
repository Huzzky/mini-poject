from rest_framework import serializers
from .models import User, MessageChat

class UserSer(serializers.Serializer):
    name_user = serializers.CharField()
    id_user = serializers.IntegerField()

class MCSer(serializers.Serializer):
    message_user = serializers.CharField()
    date_send_message = serializers.DateTimeField()
    from_user_id = serializers.IntegerField()

    def create(self, validated_data):
        return MessageChat.objects.create(**validated_data)


class FilterSer(serializers.Serializer):
    messages = MCSer(read_only=True, many=True)
    users = UserSer(read_only=True, many=True)

