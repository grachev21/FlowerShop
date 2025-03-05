# Импорт необходимых модулей
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options
from fake_useragent import UserAgent

# Инициализация сервиса для ChromeDriver с указанием пути к исполняемому файлу
s = Service(executable_path='./chromedriver-linux64/chromedriver')

# Создание объекта Options для настройки параметров браузера
opts = Options()

# Генерация случайного User-Agent для имитации реального пользователя
ua = UserAgent()
opts.add_argument(ua.chrome)

# Инициализация драйвера с указанием сервиса и настроек
driver = webdriver.Chrome(service=s, options=opts)

# Список для хранения количества ссылок (в данном коде не используется)
link_count = []

# XPath для поиска кнопки "Следующая страница"
next = "//*[contains(concat(' ', @class, ' '), ' pagination__item pagination__item--next')]"

try:
    # Максимизация окна браузера
    driver.maximize_window()

    # Переход на страницу каталога пластинок
    driver.get('https://stereozona.ru/catalog/plastinki/')

    # Установка неявного ожидания для элементов страницы (20 секунд)
    driver.implicitly_wait(20)

    # Функция для проверки наличия кнопки "Следующая страница"
    def check_function():
        try:
            driver.find_element(By.XPATH, next)
        except NoSuchElementException:
            return False
        return True

    # Функция для добавления ссылок в файл
    def add_links(links):
        for link in links:
            with open("links.txt", "a") as file:
                file.write(link.get_attribute('href') + '\n')

    # Инициализация переменной для контроля цикла
    check = True
    count = 0

    # Основной цикл для перехода по страницам и сбора ссылок
    while check:
        # Проверка наличия кнопки "Следующая страница"
        check = check_function()

        # Клик по кнопке "Следующая страница"
        driver.find_element(By.XPATH, next).click()

        # Поиск всех ссылок на текущей странице
        links = driver.find_elements(By.XPATH, "//*[contains(concat(' ', @class, ' '), ' item__content')]")

        # Добавление найденных ссылок в файл
        add_links(links)

        # Вывод номера текущей итерации
        print('click', count)
        count += 1

    # В данном коде функция collecting_content() закомментирована и не используется
    # collecting_content()

# Обработка исключений
except Exception as ex:
    print(ex)

# Завершение работы драйвера и выход из программы
finally:
    driver.close()
    exit()