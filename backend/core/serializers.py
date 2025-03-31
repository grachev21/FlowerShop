from rest_framework import serializers
from .models import ProductCard, Photo, Carousel, Type


class Photoserializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ["image"]


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ["name"]


class ProductCardSerializer(serializers.ModelSerializer):
    photos = Photoserializer(many=True, read_only=True)
    # type = TypeSerializer(many=True, read_only=True)

    class Meta:
        model = ProductCard
        fields = ["id", "type", "name", "price", "description", "photos"]


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = ["title", "image"]
