from django.db import models
from users.models import CustomUser  # Импорт пользовательской модели пользователя


class ProductCard(models.Model):
    # Поле для названия товара (строка, максимальная длина 200 символов)
    name = models.CharField(max_length=200, verbose_name="Название")
    # Поле для цены товара (число с фиксированной точностью, 10 цифр всего, 2 после запятой)
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    # Поле для описания товара (текстовое поле)
    description = models.TextField(verbose_name="Описание")
    # Поле для указания, опубликован ли товар (булево значение, по умолчанию True)
    publish = models.BooleanField(default=True)

    # Метод для отображения названия товара в админке и других местах
    def __str__(self):
        return self.name

    class Meta:
        # Настройки для отображения модели в админке
        verbose_name = "Проду карта"
        verbose_name_plural = "Продукт карты"


class Photo(models.Model):
    # Связь с моделью ProductCard: одна карточка товара может иметь несколько фотографий
    product = models.ForeignKey(
        ProductCard,
        on_delete=models.CASCADE,  # При удалении товара все связанные фотографии удаляются
        related_name="photos",  # Имя для обратной связи (product.photos.all())
        verbose_name="Продукт",
    )
    # Поле для загрузки фотографии (изображение сохраняется в папке 'photos/')
    image = models.ImageField(upload_to="photos/", verbose_name="Фотография")

    # Метод для отображения информации о фотографии
    def __str__(self):
        return f"Photo for {self.product.name}"


class Cart(models.Model):
    # Связь с моделью пользователя: у каждого пользователя одна корзина
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, verbose_name="Пользователь"
    )
    # Поле для хранения даты создания корзины (автоматически добавляется при создании)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    # Поле для хранения даты последнего обновления корзины (автоматически обновляется)
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    # Метод для отображения информации о корзине
    # def __str__(self):
    #     return f"Корзина пользователя {self.user.email}"

    # Метод для расчета общей стоимости всех товаров в корзине
    def total_price(self):
        return sum(item.total_price() for item in self.items.all())

    class Meta:
        # Настройки для отображения модели в админке
        verbose_name = "Корзина"
        verbose_name_plural = "Корзины"


class CartItem(models.Model):
    # Связь с моделью Cart: один элемент корзины принадлежит одной корзине
    cart = models.ForeignKey(
        Cart, related_name="items", on_delete=models.CASCADE, verbose_name="Корзина"
    )
    # Связь с моделью ProductCard: один элемент корзины связан с одним товаром
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, verbose_name="Товар"
    )
    # Поле для хранения количества товара (положительное целое число, по умолчанию 1)
    quantity = models.PositiveIntegerField(default=1, verbose_name="Количество")

    # Метод для отображения информации о элементе корзины
    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

    # Метод для расчета общей стоимости товара (цена * количество)
    def total_price(self):
        return float(self.product.price) * self.quantity

    class Meta:
        # Настройки для отображения модели в админке
        verbose_name = "Элемент корзины"
        verbose_name_plural = "Элементы корзины"
