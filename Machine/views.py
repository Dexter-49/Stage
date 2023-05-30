from django.shortcuts import render
from rest_framework import viewsets
from .models import Machine
from .serializer import MachineSerializer

# Create your views here.
class MachineViewset(viewsets.ModelViewSet):
    queryset=Machine.objects.all()
    serializer_class=MachineSerializer
