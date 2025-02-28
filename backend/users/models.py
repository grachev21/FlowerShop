from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models


# Определение менеджера для пользовательской модели
class CustomUserManager(BaseUserManager):
    # Метод для создания обычного пользователя
    def create_user(self, email, password=None, **extra_fields):
        # Проверка, что поле email задано
        if not email:
            raise ValueError("The Email field must be set")
        # Нормализация email (приведение к нижнему регистру)
        email = self.normalize_email(email)
        # Создание экземпляра пользователя
        user = self.model(email=email, **extra_fields)
        # Установка пароля
        user.set_password(password)
        # Сохранение пользователя в базе данных
        user.save(using=self._db)
        return user

    # Метод для создания суперпользователя
    def create_superuser(self, email, password=None, **extra_fields):
        # Установка значений по умолчанию для полей is_staff и is_superuser
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        # Проверка, что is_staff и is_superuser установлены в True
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        # Создание суперпользователя с использованием метода create_user
        return self.create_user(email, password, **extra_fields)


# Определение пользовательской модели пользователя
class CustomUser(AbstractBaseUser, PermissionsMixin):
    # Поле email, которое является уникальным
    email = models.EmailField(unique=True)
    # Поле first_name, которое может быть пустым
    first_name = models.CharField(max_length=30, blank=True)
    # Поле last_name, которое может быть пустым
    last_name = models.CharField(max_length=30, blank=True)
    # Поле is_active, которое по умолчанию установлено в True
    is_active = models.BooleanField(default=True)
    # Поле is_staff, которое по умолчанию установлено в False
    is_staff = models.BooleanField(default=False)
    # Поле date_joined, которое автоматически устанавливается при создании пользователя
    date_joined = models.DateTimeField(auto_now_add=True)

    # Использование пользовательского менеджера
    objects = CustomUserManager()

    # Установка поля email в качестве уникального идентификатора пользователя
    USERNAME_FIELD = "email"
    # Список полей, которые требуются при создании пользователя
    REQUIRED_FIELDS = []

    # Метод для строкового представления пользователя
    def __str__(self):
        return self.email
