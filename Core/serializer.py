from rest_framework import serializers
from .models import Division, Service, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','first_name','last_name']

class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Division
        fields=['nom','tag']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Service
        fields='__all__'

class CreateCustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=['id','username','password','division']


    def save(self,**kwargs):
        user = super(CreateCustomerSerializers, self).save()
        user.set_password(self.validated_data["password"])
        user.save()
        return user
