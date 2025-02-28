# Импортируем модуль admin для настройки админ-панели
from django.contrib import admin

# Импортируем модели, которые будем регистрировать в админ-панели
from .models import ProductCard, Cart, CartItem, Photo, CustomUser


# Регистрируем модель Cart в админ-панели с использованием декоратора @admin.register
@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    # Указываем, какие поля будут отображаться в списке объектов модели Cart
    list_display = ("user", "created_at", "updated_at")

    # Указываем, по каким полям можно выполнять поиск в админ-панели
    search_fields = ("user",)


# Создаем inline-класс для отображения связанных фотографий в админ-панели ProductCard
class ProductPhotoInline(admin.TabularInline):
    # Указываем модель, с которой связан inline
    model = Photo

    # Указываем количество дополнительных пустых форм для добавления фотографий
    extra = 3


# Регистрируем модель ProductCard в админ-панели
@admin.register(ProductCard)
class ProductAdmin(admin.ModelAdmin):
    # Указываем, что в админ-панели ProductCard будут отображаться связанные фотографии через inline
    inlines = [ProductPhotoInline]
