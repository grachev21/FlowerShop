from django.urls import include, path
from rest_framework import routers

from .views import CarouselSet, FooterTextSet, LogoSet, MenuDownSet, MenuTopSet

router = routers.DefaultRouter()
router.register(r"Carousel", CarouselSet)
router.register(r"FooterText", FooterTextSet)
router.register(r"Logo", LogoSet)
router.register(r"MenuDown", MenuDownSet)
router.register(r"MenuTop", MenuTopSet)


urlpatterns = [
    path("api/", include(router.urls)),
]
