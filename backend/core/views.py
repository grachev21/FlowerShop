from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Category, ProductCard, TypeProduct, Basket
from .serializers import (
            CategorySerializer, ProductCardSerializer, 
            TypeProductSerializer, BasketPostSerializer, 
            BasketGetSerializer
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
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Get only current user's basket items
        return Basket.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        method = self.request.method
        print(method, "<- Type method")

        
        if method == "POST": 
            return BasketPostSerializer 
        elif method in ["PUT"]:
            return BasketUpdateSerializer  
        else:  
            return BasketGetSerializer 

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.validated_data
        basket_item, created = Basket.objects.get_or_create(
            user=request.user,
            product=data["product"],
            defaults={"quantity": data.get("quantity", 1)}
        )

        if not created:
            basket_item.quantity += data.get("quantity", 1)
            basket_item.save()

        output_data = BasketListSerializer(basket_item).data
        return Response(output_data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)



# list	GET	/api/basket/	Получить список всех объектов
# create	POST	/api/basket/	Создать новый объект
# retrieve	GET	/api/basket/1/	Получить один конкретный объект
# update	PUT	/api/basket/1/	Полностью обновить объект
# partial_update	PATCH	/api/basket/1/	Частично обновить объект
# destroy	DELETE	/api/basket/1/	Удалить объект


