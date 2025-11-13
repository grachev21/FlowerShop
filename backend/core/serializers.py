from rest_framework import serializers
from .models import ProductCard, Photo, TypeProduct, Category, Basket, Order


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ["id", "image"]


class TypeProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeProduct
        fields = ["id", "name", "image", "slogan"]


class ProductCardSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True, read_only=True)
    type_product = TypeProductSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = ProductCard
        fields = [
            "id",
            "category",
            "type_product",
            "name",
            "photos",
            "description",
            "price",
            "created_at",
            "updated_at",
        ]


class BasketPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = ["product", "quantity"]


class BasketPutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = ["id", "product", "quantity", "user"]
        read_only_fields = ["user"]


class BasketGetSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)
    product_price = serializers.DecimalField(
        source="product.price", max_digits=10, decimal_places=2, read_only=True
    )
    photos = PhotoSerializer(source="product.photos", many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Basket
        fields = [
            "id",
            "product",
            "quantity",
            "total_price",
            "added_at",
            "product_name",
            "product_price",
            "photos",
        ]
        read_only_fields = ["user", "total_price"]

    def get_total_price(self, obj):
        return obj.total_price


class OrderGetSerializer(serializers.ModelSerializer):
    product = ProductCardSerializer(
        read_only=True
    )  # Нормальное отображение продукта
    status_display = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = [
            "id",
            "product",
            "quantity",
            "country",
            "city",
            "postal_code",
            "street",
            "house",
            "apartment_office" "created",
            "status_display",
            "paid",
            "created",
        ]
        read_only_fields = ["user", "created", "updated"]

    def get_status_display(self, obj):
        print(obj)
        return obj.get_status_display()


class OrderPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            "product",
            "quantity",
            "country",
            "city",
            "postal_code",
            "street",
            "house",
            "apartment_office",
        ]
        read_only_fields = ["user", "created", "updated"]
