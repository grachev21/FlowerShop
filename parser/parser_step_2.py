import json
import requests
from fake_useragent import UserAgent
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

# from selenium.common.exceptions import NoSuchElementException
# from selenium.webdriver.common.keys import Keys
import write_data

import dict_card

s = Service(executable_path="./chromedriver-linux64/chromedriver")
opts = Options()
ua = UserAgent()
opts.add_argument(ua.chrome)
opts.add_argument("headless")
driver = webdriver.Chrome(service=s, options=opts)
driver.maximize_window()
driver.implicitly_wait(20)

list_json = []


def save_images(images, name, key):
    headers = {"User-Agent": ua.chrome}
    count = 1
    for i in images:
        src = i.get_attribute("src")
        response = requests.get(src, headers=headers)
        with open(f"./db/img/{key}_{name}_{count}.jpg", "wb") as file:
            file.write(response.content)
        count += 1

def load_card(value):
    if value["flag"]:
        copies = driver.find_elements(By.XPATH, value["element"])
        return [" ".join(str(i.get_attribute("innerText")).split()).replace("\"", "").replace("/", " ") for i in copies]
    else:
        copy = driver.find_element(By.XPATH, value["element"]).get_attribute("innerText")
        return " ".join((str(copy).split())).replace("\"", "").replace("/", " ")


def main():

    key = 0
    with open("links.txt", "r") as file:
        lines = file.readlines()

    for link in lines:
        key += 1
        data = {}
        driver.get(link)

        try:
            for element in dict_card.card:
                data_dict = load_card(element)
                data[element["name"]] = data_dict

            data["key"] = key
        
            print('record', key, data["executor"])
            images = driver.find_elements(By.CSS_SELECTOR, "div.gallery__slider-item > img")
            save_images(images, data["executor"], key)
            write_data.write_data(data)
        except Exception as e:
            print("Error", e)

        if key == 1000:
            exit()

if __name__ == "__main__":
    main()
