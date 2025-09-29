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

    # Reopers Queryset. In the URL add to the route of this performance
    # (basename = "basket")
    def get_queryset(self):
        # receives all the notes of the volter
        return Basket.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        product = serializer.validated_data["product"]
        quantity = serializer.validated_data.get("quantity", 1)

        basket_item, created = Basket.objects.get_or_create(
            user=self.request.user, product=product, defaults={"quantity": quantity}
        )

        if not created:
            basket_item.quantity += quantity
            basket_item.save()

    @action(detail=False, methods=["post"])
    def add_to_cart(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        product = serializer.validated_data["product"]
        quantity = serializer.validated_data.get("quantity", 1)

        basket_item, created = Basket.objects.get_or_create(
            user=request.user, product=product, defaults={"quantity": quantity}
        )

        if not created:
            basket_item.quantity += quantity
            basket_item.save()

        return Response(
            self.get_serializer(basket_item).data, status=status.HTTP_200_OK
        )

    @action(detail=False, methods=["post"])
    def clear_cart(self, request):
        Basket.objects.filter(user=request.user).delete()
        return Response({"message": "Корзина очищена"}, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"])
    def remove_item(self, request):
        product_id = request.data.get("product")
        if not product_id:
            return Response(
                {"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            item = Basket.objects.get(user=request.user, product_id=product_id)
        except Basket.DoesNotExist:
            return Response(
                {"error": "Товар не найден"}, status=status.HTTP_404_NOT_FOUND
            )

        if item.quantity > 1:
            item.quantity -= 1
            item.save()
            return Response(
                {"message": f"Количество товара уменьшено до {item.quantity}"},
                status=status.HTTP_200_OK,
            )
        else:
            item.delete()
            return Response(
                {"message": "Товар удалён из корзины"}, status=status.HTTP_200_OK
            )
