from rest_framework import serializers
from .models import Application,Document ,Doc_div_permission

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Application
        fields=['id','nom','url','guide']

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Document
        fields=['id','file','nom']