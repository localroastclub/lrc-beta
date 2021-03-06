# Generated by Django 2.2.5 on 2020-05-31 22:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lrc', '0013_auto_20200502_2346'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='ship_date',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='auth_user_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, unique=True),
        ),
    ]
