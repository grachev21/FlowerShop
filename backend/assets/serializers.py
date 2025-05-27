from rest_framework import serializers

from .models import Carousel, FooterText, Logo, MenuDown, MenuTop


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = "__all__"


class FooterTextSerializer(serializers.ModelSerializer):

    class Meta:
        model = FooterText
        fields = "__all__"


class LogoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Logo
        fields = "__all__"


class MenuTopSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuTop
        fields = "__all__"


class MenuDownSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuDown
        fields = "__all__"
