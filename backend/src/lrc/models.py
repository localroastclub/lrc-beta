from django.db import models
from django.contrib.auth.models import User as User_auth


class User(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=50, null=True)
    lastname = models.CharField(max_length=50, null=True)
    email = models.CharField(max_length=150)
    street_address = models.CharField(max_length=150, null=True)
    street_address_two = models.CharField(max_length=60, null=True)
    city = models.CharField(max_length=100, null=True)
    state = models.CharField(max_length=2, null=True)
    zipcode = models.BigIntegerField(null=True)
    order_rotation_id = models.CharField(
        max_length=20, null=True)  # group1, group2, inactive
    created_at = models.DateField(auto_now_add=True)
    auth_user_id = models.ForeignKey(
        User_auth, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.email


# This will be posted from one time orders
class Order(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    order_date = models.DateField(auto_now_add=True)
    ship_date = models.DateField(auto_now=False)
    order_total = models.IntegerField()
    note = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


# This is the subscription data, recurring, we should automatically create these on an interval
class Subscription(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    order_date = models.DateField(auto_now_add=True)
    ship_date = models.DateField(auto_now=False)
    order_total = models.IntegerField()
    note = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

# Use autoincrementing id


class Roaster(models.Model):
    name = models.CharField(max_length=80)
    logo_url = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    roast_type = models.CharField(max_length=30, blank=True, null=True)
    origin = models.CharField(max_length=30)
    # use for microlot, decaf, organic, etc
    category = models.CharField(max_length=30, null=True, blank=True)
    bag_size = models.CharField(max_length=30, null=True, default='12oz')
    price = models.IntegerField(default=20)
    available = models.BooleanField(default=True)
    image_url = models.CharField(max_length=255, blank=True, null=True)
    merchant_id = models.ForeignKey(Roaster, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + ', ' + self.bag_size


class Order_item(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    roaster_name = models.CharField(max_length=80)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    bean_status = models.CharField(max_length=15, default='Whole')
    note = models.CharField(max_length=255, null=True)
    order_id = models.ForeignKey(
        Order, on_delete=models.CASCADE, null=True, blank=True, default=None)


class Subscription_item(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    roaster_name = models.CharField(max_length=80)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, blank=True)
    bean_status = models.CharField(max_length=15, default='Whole')
    note = models.CharField(max_length=255, null=True)
    subscription_id = models.ForeignKey(
        Subscription, on_delete=models.CASCADE, null=True, blank=True, default=None)
