from django.contrib import admin

from .models import (
    Basket,
    Category,
    Photo,
    ProductCard,
    TypeProduct,
    CustomUser
)


# Регистрируем модель Cart в админ-панели с использованием
# декоратора @admin.register
@admin.register(Basket)
class CartAdmin(admin.ModelAdmin):
    # Указываем, какие поля будут отображаться в списке объектов модели Cart
    list_display = ("user", "product", "quantity", "added_at")

    # Указываем, по каким полям можно выполнять поиск в админ-панели
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
