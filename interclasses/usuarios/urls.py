from django.urls import path
from . import views

urlpatterns = [
    path('usuarios/', views.UsuariosList.as_view(), name='usuarios-list'),
    path('usuarios/<int:pk>/', views.UsuariosDetail.as_view(), name='usuarios-detail'),
    path('modalidades/', views.Modalidades.as_view(), name='modalidade-list'),
    path('modalidades/<int:pk>/', views.Modalidades.as_view(), name='modalidades-detail'),
]