from django.db import models
from django.contrib.auth.models import AbstractUser




# Create your models here.
class Division(models.Model):
    nom=models.CharField(max_length=255)
    tag=models.CharField(max_length=10)
    def __str__(self) -> str:
        return  self.nom

class Service(models.Model):
    nom=models.CharField(max_length=255)
    division=models.ForeignKey(Division,on_delete=models.CASCADE)

class User(AbstractUser):
    date_joined=None
    email=None
    division=models.ForeignKey(Division,on_delete=models.CASCADE)
    REQUIRED_FIELDS=['division']



