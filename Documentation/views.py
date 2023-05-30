from django.shortcuts import render
from rest_framework import viewsets
from .models import Document,Application
from .serializer import ApplicationSerializer,DocumentSerializer
# Create your views here.


class DocumentViewset(viewsets.ModelViewSet):
    queryset=Document.objects.all()
    serializer_class=DocumentSerializer

class ApplicationViewset(viewsets.ModelViewSet):
    queryset=Application.objects.all()
    serializer_class=ApplicationSerializer

