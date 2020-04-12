# Generated by Django 2.2.5 on 2020-04-12 17:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('order_date', models.DateField(auto_now_add=True)),
                ('ship_date', models.DateField()),
                ('order_total', models.IntegerField()),
                ('note', models.CharField(max_length=255, null=True)),
                ('status', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Roaster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('logo_url', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=150)),
                ('street_address', models.CharField(max_length=150)),
                ('street_address_two', models.CharField(max_length=60)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=2)),
                ('order_rotation_id', models.CharField(max_length=20)),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('order_date', models.DateField(auto_now_add=True)),
                ('ship_date', models.DateField()),
                ('order_total', models.IntegerField()),
                ('note', models.CharField(max_length=255, null=True)),
                ('status', models.CharField(max_length=255)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lrc.User')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('roast_type', models.CharField(max_length=30)),
                ('coffee_type', models.CharField(max_length=30)),
                ('bean_status', models.CharField(max_length=15)),
                ('price', models.IntegerField()),
                ('image_url', models.CharField(max_length=255)),
                ('merchant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lrc.Roaster')),
            ],
        ),
        migrations.CreateModel(
            name='Order_item',
            fields=[
                ('id', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('roaster_name', models.CharField(max_length=80)),
                ('note', models.CharField(max_length=255, null=True)),
                ('order_id', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='lrc.Order')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lrc.Product')),
                ('subscription_id', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='lrc.Subscription')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lrc.User'),
        ),
    ]
