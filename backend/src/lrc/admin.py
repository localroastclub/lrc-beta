from django.contrib import admin

from .models import Users_Login
from .models import Users_Data
from .models import Order
from .models import Coffee_order
from .models import Roaster


admin.site.register(Users_Login)
admin.site.register(Users_Data)
admin.site.register(Order)
admin.site.register(Coffee_order)
admin.site.register(Roaster)
