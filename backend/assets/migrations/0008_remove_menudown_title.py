# Generated by Django 4.2 on 2025-05-27 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("assets", "0007_alter_logo_link_alter_menudown_link_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="menudown",
            name="title",
        ),
    ]
