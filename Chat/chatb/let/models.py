from django.db import models

class User(models.Model):
    id_user = models.AutoField(primary_key=True)
    name_user = models.CharField(max_length=64)
    # avatar_user = models.ImageField(upload_to='/img_user', height_field=None, width_field=None, max_length=None)
    def __str__(self):
        return self.name_user

class MessageChat(models.Model):
    id_message = models.AutoField(primary_key=True)
    message_user = models.CharField(max_length=2048)
    date_send_message = models.DateTimeField(auto_now=True, auto_now_add=False)
    from_user = models.ForeignKey("User", on_delete=models.CASCADE)

    def __str__(self):
        return self.message_user
