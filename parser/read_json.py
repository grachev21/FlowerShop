import os
import json

files = os.listdir("./db/json/")

for file in files:
    with open(f"./db/json/{file}") as f:
        exemple = json.load(f)

    print(exemple)
