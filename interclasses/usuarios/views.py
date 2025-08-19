from django.shortcuts import render

from rest_framework import generics
from .models import Usuarios
from .serializers import UsuariosSerializer
from .models import Modalidades 
from .serializers import ModalidadesSerializer

class ModalidadesList(generics.ListCreateAPIView):
    queryset = Modalidades.objects.all()
    serializer_class = ModalidadesSerializer

class ModalidadesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Modalidades.objects.all()
    serializer_class = ModalidadesSerializer    

class UsuariosList(generics.ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer

class UsuariosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
