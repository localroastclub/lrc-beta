# Generated by Django 2.2.5 on 2020-05-02 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lrc', '0007_auto_20200502_1626'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='bean_status',
        ),
        migrations.AddField(
            model_name='order_item',
            name='bean_status',
            field=models.CharField(default='Whole', max_length=15),
        ),
    ]
