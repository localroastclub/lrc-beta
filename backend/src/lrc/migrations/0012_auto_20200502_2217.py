# Generated by Django 2.2.5 on 2020-05-02 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lrc', '0011_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='roast_type',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]