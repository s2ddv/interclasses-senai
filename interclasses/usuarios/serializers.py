from rest_framework import serializers, generics
from .models import Usuarios

class UsuariosSerializer(serializers.ModelSerializer):
     class Meta:
          model = Usuarios
          fields = '__all__'
from rest_framework.permissions import IsAuthenticated
# ... outras importações

class UsuariosList(generics.ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = [IsAuthenticated] # Exemplo: apenas usuários autenticados