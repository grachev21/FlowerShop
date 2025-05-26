from django.contrib import admin
from .models import MenuDown, MenuTop, Carousel, FooterText, Logo

# Register your models here.
@admin.register(MenuDown)
class MenuDownAdmin(admin.ModelAdmin):
    list_display = ("title", "link")

@admin.register(MenuTop)
class MenuTopAdmin(admin.ModelAdmin):
    list_display = ("name", "slug" )
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Carousel)
class CarouselAdmin(admin.ModelAdmin):
    list_display = ("title", "image" )


@admin.register(FooterText)
class FooterTextAdmin(admin.ModelAdmin):
    list_display = ("text", )

@admin.register(Logo)
class LogoAdmin(admin.ModelAdmin):
    list_display = ("image", )