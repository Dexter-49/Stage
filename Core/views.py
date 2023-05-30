from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Division,Service
from .serializer import DivisionSerializer

# Create your views here.
class DisionViewset(viewsets.ModelViewSet):
    queryset=Division.objects.all()
    serializer_class=DivisionSerializer

    def create(self, request, *args, **kwargs):
        ser=DivisionSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)


