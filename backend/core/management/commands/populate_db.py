import os
import json
from django.conf import settings
from django.core.management.base import BaseCommand
from django.core.files import File
from core.models import Category, TypeProduct, ProductCard

BASE_DIR = settings.BASE_DIR
IMG_DIR = os.path.join(BASE_DIR, "core", "management", "commands", "img")
TEST_JSON_FILE_DIR = os.path.join(
    BASE_DIR, "core", "management", "commands", "data_test.json"
)
with open(TEST_JSON_FILE_DIR, "r", encoding="utf-8") as file:
    DATA = json.load(file)


class Command(BaseCommand):
    help = "Populate the DB core"

    def add_category(self):
        for item in DATA["categories"]:
            obj = Category(name=item["name"])
            obj.save()

    def add_product_types(self):
        for item in DATA["product_types"]:
            img_path = os.path.join(IMG_DIR, item["image"] + ".jpg")

            with open(img_path, "rb") as f:
                obj = TypeProduct(name=item["name"], slogan=item["slogan"])
                obj.image = File(f, name=item["image"] + ".jpg")
                obj.save()  

    def handle(self, *args, **options):
        self.add_category()
        self.add_product_types()
        self.stdout.write(
            self.style.SUCCESS("Successfully populated the database for app core")
        )
