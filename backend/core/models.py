from django.db import models

from users.models import CustomUser


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class ProductCard(models.Model):

    category = models.ForeignKey(
        Category,
        related_name="category",
        on_delete=models.CASCADE,
        verbose_name="Категория",
    )
    type = models.ForeignKey(
        Category, related_name="type", on_delete=models.CASCADE, verbose_name="Тип"
    )
    name = models.CharField(max_length=255, verbose_name="Название товара")
    description = models.TextField(verbose_name="Описание товара")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class Photo(models.Model):
    product = models.ForeignKey(
        ProductCard,
        related_name="photos",
        on_delete=models.CASCADE,
        verbose_name="Товар",
    )
    image = models.ImageField(upload_to="photos/", verbose_name="Фото")

    def __str__(self):
        return f"Фото для {self.product.name}"

    class Meta:
        verbose_name = "Фото"
        verbose_name_plural = "Фотографии"


class Cart(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, verbose_name="Пользователь"
    )
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, verbose_name="Товар"
    )
    quantity = models.PositiveIntegerField(verbose_name="Количество")
    added_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления")

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"

    class Meta:
        verbose_name = "Корзина"
        verbose_name_plural = "Корзины"
        unique_together = (
            "user",
            "product",
        )  # Убедимся, что товар не добавляется в корзину дважды


class Carousel(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="photos/", verbose_name="Фото")

    class Meta:
        verbose_name = "Карусель"
        verbose_name_plural = "Карусели"
