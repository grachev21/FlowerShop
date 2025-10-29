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
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

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
    image = models.ImageField(upload_to="photos/", verbose_name="Фото")

    def __str__(self):
        return f"Фото для {self.product.name}"

    class Meta:
        verbose_name = "Фото"
        verbose_name_plural = "Фотографии"


class Basket(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, verbose_name="Пользователь"
    )
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, verbose_name="Товар"
    )
    quantity = models.PositiveIntegerField(verbose_name="Количество", default=1)
    added_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления")

    def __str__(self):
        return f"{self.user.email} - {self.product.name}"

    def total_price(self):
        return self.product.price * self.quantity

    class Meta:
        verbose_name = "Корзина"
        verbose_name_plural = "Корзины"
        unique_together = ("user", "product")


class Order(models.Model):
    STATUS_CHOICES = [
        ("created", "созданный"),
        ("paid", "оплаченный"),
        ("shipped", "отправленный"),
        ("delivered", "Доставленный"),
        ("cancelled", "отменено"),
    ]

    user = models.ForeignKey(
        CustomUser, related_name="orders", on_delete=models.CASCADE
    )

    product = models.ForeignKey(ProductCard, on_delete=models.CASCADE)
    address = models.TextField()
    postal_code = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="created")
    paid = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f"Order {self.id}"

    def get_total_cost(self):
        return sum(item.get_cost() for item in self.items.all())

