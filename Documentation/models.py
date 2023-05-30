from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey



class Document(models.Model):
    file=models.FileField(upload_to='files/documente')
    nom=models.CharField(max_length=255)

class Doc_div_permission(models.Model):
    document=models.ForeignKey(Document,on_delete=models.CASCADE)
    cont_type = models.ForeignKey(ContentType,on_delete=models.CASCADE)
    cont_id=models.PositiveIntegerField()
    cont_object=GenericForeignKey('cont_type','cont_id')

class Application(models.Model):
    nom=models.CharField(max_length=255)
    url=models.URLField()
    guide=models.FileField(upload_to='files/guides')