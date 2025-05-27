from django.contrib import admin

from .models import Carousel, FooterText, Logo, MenuDown, MenuTop


@admin.register(MenuDown)
class MenuDownAdmin(admin.ModelAdmin):
    list_display = ("name", "link")


@admin.register(MenuTop)
class MenuTopAdmin(admin.ModelAdmin):
    list_display = ("name", "link")


@admin.register(Carousel)
class CarouselAdmin(admin.ModelAdmin):
    list_display = ("title", "image")


@admin.register(FooterText)
class FooterTextAdmin(admin.ModelAdmin):
    list_display = ("text",)


@admin.register(Logo)
class LogoAdmin(admin.ModelAdmin):
    list_display = ("image",)
