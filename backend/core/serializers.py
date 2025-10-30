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
        fields = "__all__"


# class BasketSerializer(serializers.ModelSerializer):
#     product_name = serializers.CharField(source="product.name", read_only=True)
#     product_price = serializers.DecimalField(
#         source="product.price", max_digits=10, decimal_places=2, read_only=True
#     )
#     photos = PhotoSerializer(source="product.photos", many=True, read_only=True)
#     product = ProductCardSerializer(read_only=True)
#     total_price = serializers.SerializerMethodField()

#     class Meta:
#         model = Basket
#         fields = [
#             "id",
#             "product",
#             "quantity",
#             "total_price",
#             "added_at",
#             "product_name",
#             "product_price",
#             "photos",
#         ]
#         read_only_fields = ["user", "total_price"]


#     def get_total_price(self, obj):
#         # ✅ Безопасная обработка для обоих случаев
#         if hasattr(obj, 'total_price') and callable(obj.total_price):
#             # Если obj - модель Basket, используем ее метод
#             return obj.total_price()
#         else:
#             # Если obj - словарь или другой объект, вычисляем вручную
#             try:
#                 if hasattr(obj, 'product') and hasattr(obj.product, 'price'):
#                     return obj.product.price * obj.quantity
#                 else:
#                     return 0
#             except:
#                 return 0
class BasketSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)
    product_price = serializers.DecimalField(
        source="product.price", max_digits=10, decimal_places=2, read_only=True
    )
    photos = PhotoSerializer(source="product.photos", many=True, read_only=True)
    product = ProductCardSerializer(read_only=True)
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
        # Используем метод модели
        return obj.total_price()
