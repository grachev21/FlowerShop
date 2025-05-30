from .views import ProductCardSet, TypeProductSet, CategorySet, BaskeAddSet
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"ProductCard", ProductCardSet)
router.register(r"TypeProduct", TypeProductSet)
router.register(r"Category", CategorySet)
router.register(r"Basket", BaskeAddSet)


urlpatterns = [
    path("api/", include(router.urls)),
]
