from .views import ProductCardSet, TypeProductSet, CategorySet, BasketSet, OrderViewSet
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"ProductCard", ProductCardSet)
router.register(r"TypeProduct", TypeProductSet)
router.register(r"Category", CategorySet)
router.register(r"Basket", BasketSet, basename="Basket")
router.register(r"Order", OrderViewSet, basename="Order")


urlpatterns = [
    path("api/", include(router.urls)),
]
