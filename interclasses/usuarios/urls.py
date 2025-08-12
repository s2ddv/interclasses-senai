from django.urls import path
from . import views

urlpatterns = [
    path('usuarios/', views.UsuariosList.as_view(), name='usuarios-list'),
    path('usuarios/<int:pk>/', views.UsuariosDetail.as_view(), name='usuarios-detail'),
]