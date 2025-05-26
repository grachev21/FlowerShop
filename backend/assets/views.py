from rest_framework import viewsets
from .models import Carousel, MenuDown, FooterText, Logo, MenuTop
from .serializers import (
    CarouselSerializer,
    FooterTextSerializer,
    LogoSerializer,
    MenuDownSerializer,
    MenuTopSerializer,
)


class CarouselSet(viewsets.ReadOnlyModelViewSet):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer


class FooterTextSet(viewsets.ReadOnlyModelViewSet):
    queryset = FooterText.objects.all()
    serializer_class = FooterTextSerializer


class MenuDownSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuDown.objects.all()
    serializer_class = MenuDown


class LogoSet(viewsets.ReadOnlyModelViewSet):
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer


class MenuDownSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuDown.objects.all()
    serializer_class = MenuDownSerializer


class MenuTopSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuTop.objects.all()
    serializer_class = MenuTopSerializer
    lookup_field = "slug"
