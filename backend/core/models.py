from django.db import models

from users.models import CustomUser


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class TypeProduct(models.Model):
    name = models.CharField(max_length=200)
    slogan = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="photos/")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Тип"
        verbose_name_plural = "Типы"


class ProductCard(models.Model):

    category = models.ForeignKey(
        Category,
        related_name="category",
        on_delete=models.CASCADE,
        verbose_name="Категория",
    )
    typeproduct = models.ForeignKey(
        TypeProduct,
        related_name="typeProduct",
        on_delete=models.CASCADE,
        verbose_name="Тип",
    )
    name = models.CharField(max_length=255, verbose_name="Название товара")
    description = models.TextField(verbose_name="Описание товара")
    price = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name="Цена")
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name: str = "Товар"
        verbose_name_plural = "Товары"


class Photo(models.Model):
    product = models.ForeignKey(
        ProductCard,
        related_name="photos",
        on_delete=models.CASCADE,
        verbose_name="Товар",
    )
    image = models.ImageField(
        upload_to="photos/",
        verbose_name="Фото"
    )

    def __str__(self):
        return f"Фото для {self.product.name}"

    class Meta:
        verbose_name = "Фото"
        verbose_name_plural = "Фотографии"


class Basket(models.Model):
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        verbose_name="Пользователь",
        null=True
    )
    product = models.ForeignKey(
        ProductCard,
        on_delete=models.CASCADE,
        verbose_name="Товар",
        null=True
    )
    quantity = models.PositiveIntegerField(
        verbose_name="Количество",
        null=True
    )
    added_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Дата добавления",
        null=True
    )

    def __str__(self):
        return self.user.email

    # class Meta:
    #     verbose_name = "Корзина"
    #     verbose_name_plural = "Корзины"
    #     unique_together = (
    #         "user",
    #         "product",
    #     )
