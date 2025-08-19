from rest_framework import serializers, generics
from .models import Usuarios
from .models import Modalidades

class ModalidadesSerializer(serializers.ModelSerializer):
     class Meta:
          model = Modalidades
          fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
     class Meta:
          model = Usuarios
          fields = '__all__'

from rest_framework.permissions import IsAuthenticated

class UsuariosList(generics.ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = [IsAuthenticated] 

class ModalidadesList(generics.ListCreateAPIView):
     queryset = Usuarios.objects.all()
     serializer_class = ModalidadesSerializer
     permission_classes = [IsAuthenticated]