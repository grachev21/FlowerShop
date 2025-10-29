from django.contrib import admin

from .models import Basket, Order, Category, Photo, ProductCard, TypeProduct, CustomUser


@admin.register(Basket)
class CartAdmin(admin.ModelAdmin):
    list_display = ("user", "product", "quantity", "added_at")
    search_fields = ("user",)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "product",
        "address",
        "city",
        "country",
        "updated",
        "status",
        "paid",
    )
    search_fields = ("user",)


# Создаем inline-класс для отображения связанных фотографий в
# админ-панели ProductCard
class ProductPhotoInline(admin.TabularInline):
    # Указываем модель, с которой связан inline
    model = Photo
    # Указываем количество дополнительных пустых форм для добавления фотографий
    extra = 3


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(TypeProduct)
class TypeProductAdmin(admin.ModelAdmin):
    list_display = ("name",)


# Регистрируем модель ProductCard в админ-панели
@admin.register(ProductCard)
class ProductAdmin(admin.ModelAdmin):
    # Указываем, что в админ-панели ProductCard будут отображаться связанные
    # фотографии через inline
    inlines = [ProductPhotoInline]
