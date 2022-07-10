from django.db import models

# Create your models here.
class Lead(models.Model):
    title = models.CharField(max_length=200, default='Food')
    anime = models.CharField(max_length=200, default='')
    recipe = models.CharField(max_length=400)
    photo = models.CharField(max_length=400)
    irl_photo = models.CharField(max_length=400, default='...')
    created = models.DateTimeField(auto_now_add=True) ##<------ So that the user can see when their post was made...may have to write unix conversion