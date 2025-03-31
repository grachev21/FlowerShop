from rest_framework import viewsets

from core import models

from .models import Carousel, ProductCard
from .serializers import CarouselSerializer, ProductCardSerializer


class ProductCardSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductCard.objects.all()
    serializer_class = ProductCardSerializer


class CarouselSet(viewsets.ReadOnlyModelViewSet):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer
