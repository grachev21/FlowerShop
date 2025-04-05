from rest_framework import serializers
from .models import ProductCard, Photo, Carousel, TypeProduct, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ["image"]


class TypeProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeProduct
        fields = ["name", "image", "slogan"]


class ProductCardSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True, read_only=True)
    typeproduct = TypeProductSerializer(read_only=True)

    class Meta:
        model = ProductCard
        fields = ["id", "typeproduct", "name", "price", "description", "photos"]


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = ["title", "image"]
