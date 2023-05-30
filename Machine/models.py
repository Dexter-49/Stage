from django.db import models
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

# Create your models here.
class Machine(models.Model):
    address_mac=models.CharField(max_length=255,primary_key=True)
    system=models.CharField(max_length=255)
    port=models.CharField(max_length=255)
    cont_type = models.ForeignKey(ContentType,on_delete=models.CASCADE)
    cont_id=models.PositiveIntegerField()
    cont_object=GenericForeignKey('cont_type','cont_id')

class Machine_user(models.Model):
    machine=models.ForeignKey(Machine,on_delete=models.CASCADE)
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)

