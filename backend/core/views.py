from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Category, ProductCard, TypeProduct, Basket
from .serializers import (
    CategorySerializer,
    ProductCardSerializer,
    TypeProductSerializer,
    BasketAddSerializer,
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


class BaskeAddSet(viewsets.ModelViewSet):
    queryset = Basket.objects.all()
    serializer_class = BasketAddSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Basket.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
