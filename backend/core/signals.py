# from django.db import models
# from django.db.models.signals import pre_save
# from django.dispatch import receiver
# import uuid

# class Product(models.Model):
#     article = models.CharField(max_length=50, unique=True, blank=True)
    # name = models.CharField(max_length=255)
    # name = models.CharField(max_length=200, verbose_name="Название")
    # price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    # description = models.TextField(verbose_name="Описание")
    # publish = models.BooleanField(default=True)

# @receiver(pre_save, sender=Product)
# def generate_article(sender, instance, **kwargs):
#     if not instance.article:
#         instance.article = str(uuid.uuid4())[:8].upper()  