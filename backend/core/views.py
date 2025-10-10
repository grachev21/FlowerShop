from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Category, ProductCard, TypeProduct, Basket
from .serializers import (
    CategorySerializer,
    ProductCardSerializer,
    TypeProductSerializer,
    BasketSerializer,
)


class TypeProductSet(viewsets.ReadOnlyModelViewSet):
    queryset = TypeProduct.objects.all()
    serializer_class = TypeProductSerializer


class CategorySet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductCardSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductCard.objects.all()
    serializer_class = ProductCardSerializer

    def get_queryset(self):
        queryset = ProductCard.objects.all()

        category_id = self.request.query_params.get("category_id")
        if category_id is not None:
            queryset = queryset.filter(category_id=category_id)

        typeproduct_id = self.request.query_params.get("typeproduct_id")
        if typeproduct_id is not None:
            queryset = queryset.filter(typeproduct_id=typeproduct_id)

        return queryset


class BasketSet(viewsets.ModelViewSet):
    queryset = Basket.objects.all()
    serializer_class = BasketSerializer
    permission_classes = [IsAuthenticated]
