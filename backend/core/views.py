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
    """ViewSet for managing user shopping basket"""
    serializer_class = BasketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Get only current user's basket items"""
        return Basket.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """Create or update basket item on POST"""
        product = serializer.validated_data["product"]
        quantity = serializer.validated_data.get("quantity", 1)

        # Get or create basket item, update quantity if exists
        basket_item, created = Basket.objects.get_or_create(
            user=self.request.user,
            product=product,
            defaults={"quantity": quantity}
        )

        if not created:
            basket_item.quantity += quantity
            basket_item.save()

    @action(detail=False, methods=["post"])
    def minus_product(self, request):
        """Decrease quantity or remove item from cart"""
        # Get product ID from request data
        # Example: {"product": 123}
        flag = request.data.get("flag")
        print(flag)
        product_id = request.data.get("product")

        # Check if product ID was provided
        if not product_id:
            return Response(
                {"error": "Product ID required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Find the basket item for current user and product
            # Uses unique_together constraint from Basket model
            item = Basket.objects.get(user=request.user, product_id=product_id)
        except Basket.DoesNotExist:
            # Return error if product not found in user's basket
            return Response(
                {"error": "Product not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        # Handle quantity decrease or removal
        if item.quantity > 1:
            if flag == "minus":
                item.quantity -= 1
            if flag == "plus":
                item.quantity += 1

            item.save()
            return Response(
                {"message": f"Quantity decreased to {item.quantity}"},
                status=status.HTTP_200_OK,
            )

        # If quantity is 1, remove the item completely from basket
        # item.delete()
        return Response(
            {"message": "Product removed from cart"},
            status=status.HTTP_200_OK
        )
