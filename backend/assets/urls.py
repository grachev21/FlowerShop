from .views import CarouselSet, FooterTextSet, LogoSet, MenuDownSet, MenuTopSet
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"Carousel", CarouselSet)
router.register(r"FooterText", FooterTextSet )
router.register(r"Logo", LogoSet )
router.register(r"MenuDown", MenuDownSet )
router.register(r"MenuTop", MenuTopSet, basename="MenuTop" )


urlpatterns = [
    path("api/", include(router.urls)),
]

