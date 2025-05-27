from django.db import models


class Logo(models.Model):
    image = models.ImageField(upload_to="photos/", null=True, verbose_name="Логотип")
    link = models.CharField(
        max_length=200, unique=True, null=True, verbose_name="Ссылка"
    )

    class Meta:
        verbose_name = "Логотип"
        verbose_name_plural = "Логотипы"


class MenuTop(models.Model):
    name = models.CharField(max_length=200, null=True, verbose_name="Имя")
    link = models.CharField(
        max_length=200, unique=True, null=True, verbose_name="Ссылка"
    )

    class Meta:
        verbose_name = "Верхнее меню"
        verbose_name_plural = "Верхнее меню"


class MenuDown(models.Model):
    name = models.CharField(max_length=200, null=True, verbose_name="Имя")
    link = models.CharField(
        max_length=200, unique=True, null=True, verbose_name="Ссылка"
    )

    class Meta:
        verbose_name = "Нижнее меню"
        verbose_name_plural = "Нижние меню"


class FooterText(models.Model):
    text = models.TextField(verbose_name="Текст", null=True)

    class Meta:
        verbose_name = "Текст"
        verbose_name_plural = "Текста"


class Carousel(models.Model):
    title = models.CharField(max_length=200, null=True, verbose_name="Заголовок")
    image = models.ImageField(upload_to="photos/", null=True, verbose_name="Фото")

    class Meta:
        verbose_name = "Карусель"
        verbose_name_plural = "Карусели"
