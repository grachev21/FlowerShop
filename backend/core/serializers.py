from rest_framework import serializers
from .models import ProductCard, Photo, Carousel


class Photoserializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ["image"]


class ProductCardSerializer(serializers.ModelSerializer):
    photos = Photoserializer(many=True, read_only=True)

    class Meta:
        model = ProductCard
        fields = ["id", "name", "price", "description", "photos"]


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = ["title", "image"]
