from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models


# Definition of a manager for a user model
class CustomUserManager(BaseUserManager):
    # Method for creating an ordinary user

    def create_user(self, email, password=None, **extra_fields):
        # Check that the email field is set

        if not email:
            raise ValueError("The Email field must be set")
        # Normalization of email (bringing to the lower register)

        email = self.normalize_email(email)
        # Creating a user instance

        user = self.model(email=email, **extra_fields)
        # Password setting

        user.set_password(password)
        # Preservation of the user in the database

        user.save(using=self._db)
        return user

    # Method for creating a superpoler

    def create_superuser(self, email, password=None, **extra_fields):
        # Installation of default values ​​for IS_STAFF and IS_Superuser fields

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        # Check that IS_STAFF and IS_SUPERUSER are installed in True

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        # Creation of a superpower using the Create_user method

        return self.create_user(email, password, **extra_fields)


# Determining user user's user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    # Email field, which is unique

    email = models.EmailField(unique=True)
    # FIRST_NAME field, which can be empty

    first_name = models.CharField(max_length=30, blank=True)
    # Last_name field, which can be empty

    last_name = models.CharField(max_length=30, blank=True)
    # Os_active field, which by default is installed in True

    is_active = models.BooleanField(default=True)
    # The IS_STAFF field, which by default is installed in FALSE

    is_staff = models.BooleanField(default=False)
    # Date_Joined field, which is automatically installed when creating a user

    date_joined = models.DateTimeField(auto_now_add=True)

    # Using user manager

    objects = CustomUserManager()

    # Email installation as a unique user identifier

    USERNAME_FIELD = "email"
    # The list of fields that are required when creating a user

    REQUIRED_FIELDS = []

    # Method for stringent presentation of the user

    def __str__(self):
        return self.email
