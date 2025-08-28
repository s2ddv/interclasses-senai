from rest_framework import serializers, generics
from .models import Usuarios
from .models import Modalidades

class ModalidadesSerializer(serializers.ModelSerializer):
     class Meta:
          model = Modalidades
          fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    modalidade = serializers.PrimaryKeyRelatedField(
        queryset=Modalidades.objects.all()
    )

    class Meta:
        model = Usuarios
        fields = ['id', 'nome_completo', 'data_nascimento', 'turma', 'email', 'senha', 'modalidade']

from rest_framework.permissions import IsAuthenticated

class UsuariosList(generics.ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = [IsAuthenticated] 

class ModalidadesList(generics.ListCreateAPIView):
     queryset = Usuarios.objects.all()
     serializer_class = ModalidadesSerializer
     permission_classes = [IsAuthenticated]