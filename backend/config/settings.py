import os
from pathlib import Path

# Определение базовой директории проекта
BASE_DIR = Path(__file__).resolve().parent.parent

# Секретный ключ для обеспечения безопасности проекта
# ВНИМАНИЕ: Не используйте этот ключ в продакшене!
SECRET_KEY = "django-insecure-r25)@eny!u1!5+ww!ol7#5y09*rva$vb)k+q16ncff%d3x0+74"

# Режим отладки. В продакшене должно быть False
DEBUG = True

# Список разрешенных хостов (для продакшена нужно указать реальные домены)
ALLOWED_HOSTS = []

# Список установленных приложений
INSTALLED_APPS = [
    "django.contrib.admin",  # Админка Django
    "django.contrib.auth",  # Система аутентификации
    "django.contrib.contenttypes",  # Система типов контента
    "django.contrib.sessions",  # Управление сессиями
    "django.contrib.messages",  # Система сообщений
    "django.contrib.staticfiles",  # Управление статическими файлами
    "corsheaders",  # Приложение для обработки CORS (Cross-Origin Resource Sharing)
    "rest_framework",  # Django REST Framework для создания API
    "djoser",  # Библиотека для аутентификации и управления пользователями
    "rest_framework.authtoken",  # Токен-аутентификация для REST Framework
    "users",  # Пользовательское приложение (ваше)
    "core",  # Основное приложение (ваше)
    "assets",
]

AUTH_USER_MODEL = "users.CustomUser"

# Список middleware (промежуточного ПО)
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # Middleware для обработки CORS
    "django.middleware.security.SecurityMiddleware",  # Обеспечение безопасности
    "django.contrib.sessions.middleware.SessionMiddleware",  # Управление сессиями
    "django.middleware.common.CommonMiddleware",  # Общие функции middleware
    "django.middleware.csrf.CsrfViewMiddleware",  # Защита от CSRF-атак
    "django.contrib.auth.middleware.AuthenticationMiddleware",  # Аутентификация
    "django.contrib.messages.middleware.MessageMiddleware",  # Управление сообщениями
    "django.middleware.clickjacking.XFrameOptionsMiddleware",  # Защита от кликджекинга
]

# Корневой URL-конфигурации проекта
ROOT_URLCONF = "config.urls"

# Настройки шаблонов
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",  # Используемый движок шаблонов
        "DIRS": [],  # Дополнительные директории для поиска шаблонов
        "APP_DIRS": True,  # Поиск шаблонов в директориях приложений
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",  # Контекстный процессор для отладки
                "django.template.context_processors.request",  # Добавляет объект request в контекст
                "django.contrib.auth.context_processors.auth",  # Добавляет информацию о пользователе
                "django.contrib.messages.context_processors.messages",  # Добавляет сообщения
            ],
        },
    },
]

# WSGI-приложение для запуска проекта
WSGI_APPLICATION = "config.wsgi.application"

CORS_ALLOW_ALL_ORIGINS = True  # Разрешить запросы с любых источников

# Настройки базы данных
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",  # Используемая СУБД (SQLite)
        "NAME": BASE_DIR / "db.sqlite3",  # Путь к файлу базы данных
    }
}

# Валидаторы паролей
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",  # Проверка на схожесть с атрибутами пользователя
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",  # Минимальная длина пароля
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",  # Проверка на использование распространенных паролей
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",  # Проверка на использование только цифр
    },
]

# Язык и временная зона
LANGUAGE_CODE = "ru"  # Язык по умолчанию (английский)
TIME_ZONE = "UTC"  # Временная зона (UTC)
USE_I18N = True  # Включение интернационализации
USE_TZ = True  # Использование временных зон

# Настройки Django REST Framework
REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",  # Рендеринг JSON
        "rest_framework.renderers.BrowsableAPIRenderer",  # Рендеринг браузерного API
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",  # Аутентификация по токену
        "rest_framework.authentication.SessionAuthentication",  # Аутентификация по сессии
    ],
}

# Настройки для медиафайлов (загружаемые пользователем файлы)
MEDIA_URL = "/media/"  # URL-префикс для медиафайлов
MEDIA_ROOT = os.path.join(BASE_DIR, "media")  # Директория для хранения медиафайлов

# Настройки для статических файлов (CSS, JS, изображения и т.д.)
STATIC_URL = "/static/"  # URL-префикс для статических файлов
STATIC_ROOT = os.path.join(
    BASE_DIR, "/static/"
)  # Директория для хранения статических файлов

# Автоматическое поле для первичного ключа в моделях
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


# BASE_DIR: Определяет корневую директорию проекта.

# SECRET_KEY: Используется для криптографической подписи. Никогда не публикуйте его в открытом доступе.

# DEBUG: Включает или отключает режим отладки. В продакшене должен быть False.

# ALLOWED_HOSTS: Список доменов, которые могут обслуживать ваш проект. В разработке можно оставить пустым.

# INSTALLED_APPS: Список всех приложений, используемых в проекте.

# MIDDLEWARE: Промежуточное ПО, которое обрабатывает запросы и ответы.

# DATABASES: Настройки базы данных. По умолчанию используется SQLite.

# AUTH_PASSWORD_VALIDATORS: Валидаторы для проверки сложности паролей.

# REST_FRAMEWORK: Настройки Django REST Framework.

# MEDIA_URL и MEDIA_ROOT: Настройки для работы с медиафайлами.

# STATIC_URL и STATIC_ROOT: Настройки для работы со статическими файлами.
