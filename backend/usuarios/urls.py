from django.urls import path
from . import views

urlpatterns = [
    path('usuarios/', views.UsuariosList.as_view(), name='usuarios-list'),
    path('usuarios/<int:pk>/', views.UsuariosDetail.as_view(), name='usuarios-detail'),
    path('usuarios/criar/', views.criar_usuarios, name="criar_usuarios"),
    path('modalidades/', views.ModalidadesList.as_view(), name='modalidades-list'),
    path('modalidades/<int:pk>/', views.ModalidadesDetail.as_view(), name='modalidades-detail'),
]