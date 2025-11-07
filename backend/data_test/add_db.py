from data_test import data
from ..core.models import Category

category = list(set(item["category"] for item in data))
type_product = list(set(item["type_product"] for item in data))
print(category)
print(type_product)

# def get_category_and_type():



# def record():

#     for item in data:
#         print(item["name"])

# record()