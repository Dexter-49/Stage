from django.contrib.contenttypes.models import ContentType
from rest_framework import serializers
from .models import Machine,Machine_user


class MAchine_user(serializers.ModelField):
    class Meta:
        model=Machine_user
        fields=['user',]

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model=Machine
        fields=['address_mac','system','port']

    def create(self, validated_data):
        cont_type=ContentType.objects.get(app_label="Core",model="service")
        model_class=cont_type.model_class()
        qs=model_class.objects.get()
        return qs
