from rest_framework import serializers
from .models import ProductCard, Photo, TypeProduct, Category, Basket


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
    typeproduct = TypeProductSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = ProductCard
        fields = [
            "id",
            "typeproduct",
            "category",
            "name",
            "price",
            "description",
            "photos",
        ]


class BasketSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)
    product_price = serializers.DecimalField(
        source="product.price", max_digits=10, decimal_places=2, read_only=True
    )
    photos = PhotoSerializer(source="product.photos", many=True, read_only=True)



    class Meta:
        model = Basket
        fields = [
            "id",
            "product",
            "quantity",
            "added_at",
            "product_name",
            "product_price",
            "photos",
        ]
        read_only_fields = ["user"]
