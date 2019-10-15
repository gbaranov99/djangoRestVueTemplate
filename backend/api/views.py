from .models import File
from .serializers import FileSerializer
from rest_framework import viewsets
from django.shortcuts import render


class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
