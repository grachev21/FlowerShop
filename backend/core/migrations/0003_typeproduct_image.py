# Generated by Django 4.2 on 2025-03-31 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='typeproduct',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/', verbose_name='Фото'),
        ),
    ]
