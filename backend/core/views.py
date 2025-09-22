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
    serializer_class = BasketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Basket.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.action == "create":
            return BasketSerializer
        return BasketSerializer

    def perform_create(self, serializer):
        product = serializer.validated_data["product"]
        quantity = serializer.validated_data.get("quantity", 1)

        # Проверяем, есть ли уже товар в корзине
        basket_item, created = Basket.objects.get_or_create(
            user=self.request.user, product=product, defaults={"quantity": quantity}
        )

        # Если товар уже есть в корзине, увеличиваем количество
        if not created:
            basket_item.quantity += quantity
            basket_item.save()

    # Эндпоинт для быстрого добавления товара: POST /api/Basket/add_to_cart/
    @action(detail=False, methods=["post"])
    def add_to_cart(self, request):
        serializer = BasketSerializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            product_id = serializer.validated_data["product"].id
            quantity = serializer.validated_data.get("quantity", 1)

            try:
                product = ProductCard.objects.get(id=product_id)
            except ProductCard.DoesNotExist:
                return Response(
                    {"error": "Товар не найден"}, status=status.HTTP_404_NOT_FOUND
                )

            # Добавляем товар в корзину
            basket_item, created = Basket.objects.get_or_create(
                user=request.user, product=product, defaults={"quantity": quantity}
            )

            if not created:
                basket_item.quantity += quantity
                basket_item.save()

            return Response(
                BasketSerializer(basket_item).data, status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Эндпоинт для очистки корзины: POST /api/Basket/clear_cart/
    @action(detail=False, methods=["post"])
    def clear_cart(self, request):
        Basket.objects.filter(user=request.user).delete()
        return Response({"message": "Корзина очищена"}, status=status.HTTP_200_OK)
