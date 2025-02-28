from django.shortcuts import render
from rest_framework import viewsets
from .models import ProductCard
from .serializers import ProductCardSerializer


class ProductCardSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductCard.objects.all()
    serializer_class = ProductCardSerializer