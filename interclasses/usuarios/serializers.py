from rest_framework import serializers, generics
from .models import Usuarios

class ModalidadeSeralizer(seraliazers.ModelSerializer):
     class Meta:
          model = Modalidade
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