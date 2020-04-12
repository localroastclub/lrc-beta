from django.db import models


class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=150)
    street_address = models.CharField(max_length=150)
    street_address_two = models.CharField(max_length=60)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zipcode = models.IntegerField
    order_rotation_id = models.CharField(
        max_length=20)  # group1, group2, inactive
    created_at = models.DateField(auto_now_add=True)


# This will be posted from one time orders
class Orders(models.Model):
    id = models.CharField(primary_key=True)
    order_date = models.DateField(auto_now_add=True)
    ship_date = models.DateField(auto_now=False)
    order_total = models.IntegerField()
    note = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)


# This is the subscription data, recurring, we should automatically create these on an interval
class Subscriptions(models.Model):
    id = models.CharField(primary_key=True)
    order_date = models.DateField(auto_now_add=True)
    ship_date = models.DateField(auto_now=False)
    order_total = models.IntegerField()
    note = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)


class Order_items(models.Model):
    id = models.CharField(primary_key=True)
    roaster_name = models.CharField(max_length=80)
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    note = models.CharField(max_length=255, null=True)
    order_id = models.ForeignKey(
        Orders, on_delete=models.CASCADE, null=True, blank=True, default=None)
    subscription_id = models.ForeignKey(
        Subscriptions, on_delete=models.CASCADE, null=True, blank=True, default=None)


# Use autoincrementing id


class Roasters(models.Model):
    name = models.CharField(max_length=80)
    logo_url = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Products(models.Model):
    name = models.CharField(max_length=255)
    roast_type = models.CharField(max_length=30)
    coffee_type = models.CharField(max_length=30)
    bean_status = models.CharField(max_length=15)
    price = models.IntegerField()
    image_url = models.CharField(255)
    merchant_id = models.ForeignKey(Roasters, on_delete=models.CASCADE)
