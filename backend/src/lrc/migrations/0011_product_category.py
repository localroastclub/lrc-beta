# Generated by Django 2.2.5 on 2020-05-02 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lrc', '0010_auto_20200502_1814'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
