# Generated by Django 2.2.8 on 2019-12-12 22:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0005_auto_20191207_0353'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gamelog',
            name='modified',
        ),
    ]