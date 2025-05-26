from django.db import models
from django.urls import reverse
from django.utils.text import slugify


class Logo(models.Model):
    image = models.ImageField(upload_to="photos/", null=True, verbose_name="Логотип")
    link = models.SlugField(max_length=200, unique=True, null=True, verbose_name="Ссылка")

    class Meta:
        verbose_name = "Логотип"
        verbose_name_plural = "Логотипы"


class MenuTop(models.Model):
    name = models.CharField(max_length=200, null=True, verbose_name="Имя")
    slug = models.SlugField(max_length=100, unique=True, blank=True)

    # def save(self, *args, **kwargs):
    #     if not self.slug:  # Генерируем slug только при создании
    #         self.slug = slugify(self.name)  # "My Article" → "my-article"
    #     super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('MenuTop', kwargs={'slug': self.slug})

    class Meta:
        verbose_name = "Верхнее меню"
        verbose_name_plural = "Верхнее меню"


class MenuDown(models.Model):
    title = models.CharField(max_length=200, null=True)
    name = models.CharField(max_length=200, null=True, verbose_name="Имя")
    link = models.SlugField(max_length=200, unique=True, null=True, verbose_name="Ссылка")

    class Meta:
        verbose_name = "Нижнее меню"
        verbose_name_plural = "Нижние меню"


class FooterText(models.Model):
    text = models.TextField(verbose_name="Текст", null=True)

    class Meta:
        verbose_name = "Текст"
        verbose_name_plural = "Текста"


class Carousel(models.Model):
    title = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to="photos/", null=True, verbose_name="Фото")

    class Meta:
        verbose_name = "Карусель"
        verbose_name_plural = "Карусели"
