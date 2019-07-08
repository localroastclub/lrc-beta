from django.db import models


class Users_Login(models.Model):
    email = models.CharField(max_length=40)
    hashword = models.TextField()

    def __str__(self):
        return self.email


class Users_Data(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=255)
    cchash = models.TextField()
    subscribed = models.BooleanField()
    order_rotation_id = models.CharField(
        max_length=20)  # group1, group2, inactive
    user_login = models.ForeignKey(Users_Login, on_delete=models.CASCADE)


class Order(models.Model):
    order_num = models.IntegerField()
    order_date = models.DateField(auto_now=False)
    ship_date = models.DateField(auto_now=False)
    order_total = models.IntegerField()
    user_id = models.ForeignKey(Users_Data, on_delete=models.CASCADE)

# This will be posted from the order page


class Coffee_order(models.Model):
    roaster_name = models.CharField(max_length=80)
    roast_type = models.CharField(max_length=30)
    coffee_type = models.CharField(max_length=30)
    bean_status = models.CharField(max_length=15)
    note = models.CharField(max_length=255)
    orders_id = models.ForeignKey(Order, on_delete=models.CASCADE)


class Roaster(models.Model):
    name = models.CharField(max_length=80)
    logo_url = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
