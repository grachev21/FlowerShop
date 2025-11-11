import os
import json
from django.conf import settings
from django.core.management.base import BaseCommand
from django.core.files import File
from core.models import Category, TypeProduct, ProductCard, Photo

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
            obj = TypeProduct(name=item["name"], slogan=item["slogan"])
            with open(img_path, "rb") as f:
                obj.image = File(f, name=item["image"] + ".jpg")
                obj.save()

    def add_product(self):

        for item in DATA["products"]:
            # Get the names of categories and types of products
            category = list(filter(lambda x: x["id"] == item["category_id"], DATA["categories"]))[0]
            product_type = list(filter(lambda x: x["id"] == item["product_type_id"], DATA["product_types"]))[0]

            # We receive objects
            category_obj = Category.objects.get(name=category["name"])
            product_type_obj = TypeProduct.objects.get(name=product_type["name"])
            obj = ProductCard(
                name=item["name"],
                description=item["description"],
                price=item["price"],
                category=category_obj,
                type_product=product_type_obj,
            )
            obj.save()

    def add_product_photo(self):
        for item in DATA["products"]:
            product_obj = ProductCard.objects.get(name=item["name"])
            for photo in item["photos"]:
                img_path = os.path.join(IMG_DIR, photo + ".jpg")
                photo_obj = Photo(product=product_obj)
                with open(img_path, "rb") as f:
                    photo_obj.image = File(f, name=photo + ".jpg")
                    photo_obj.save()

    def handle(self, *args, **options):
        self.add_category()
        self.add_product_types()
        self.add_product()
        self.add_product_photo()

        # Start the script
        self.stdout.write(
            self.style.SUCCESS("Successfully populated the database for app core")
        )
