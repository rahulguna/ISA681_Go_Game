# Generated by Django 2.2.6 on 2019-12-06 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='score',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
