from django.db import models


class Users_Login(models.Model):
    email = models.CharField(max_length=40)
    hashword = models.TextField


class Users_Data(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=255)
    cchash = models.TextField
    subscribed = models.BooleanField
    order_rotation_id = models.CharField(max_length=20)
    user_login = models.ForeignKey(Users_Login, on_delete=models.CASCADE)


class Roasters(models.Model):
    name = models.CharField(max_length=100)


class Coffee(models.Model):
    roast_name = models.CharField(max_length=255)
    roast_type = models.CharField(max_length=30)
    roaster_id = models.ForeignKey(Roasters, on_delete=models.CASCADE)


class Orders(models.Model):
    order_num = models.IntegerField
    order_date = models.DateField(auto_now=False)
    ship_date = models.DateField(auto_now=False)
    user_id = models.ForeignKey(Users_Data, on_delete=models.CASCADE)
