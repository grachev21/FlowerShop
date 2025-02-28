from core.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r'WordsList', WordsListSet)
# router.register(r'Settings', SettingsSet)
# router.register(r'CreateWordListSet', CreateWordListSet, basename='CreateWordListSet')
# router.register(r'ShowUserWordsList', ShowUserWordsListSet)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include(router.urls)),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
