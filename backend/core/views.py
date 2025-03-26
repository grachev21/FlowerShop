from django.shortcuts import render
from rest_framework import viewsets
from .models import ProductCard, Carousel
from .serializers import ProductCardSerializer, CarouselSerializer


class ProductCardSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductCard.objects.all()
    serializer_class = ProductCardSerializer

class CarouselSet(viewsets.ReadOnlyModelViewSet):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer
