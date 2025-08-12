from django.db import models

class Usuarios(models.Model):
    nome_completo = models.CharField(max_length=100)
    data_nascimento = models.DateField(null=True, blank=True)
    turma = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    senha = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome_completo