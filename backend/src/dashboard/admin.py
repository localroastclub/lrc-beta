from django.contrib import admin

from .models import Users_Login
from .models import Users_Data
from .models import Orders
from .models import Coffee_order


admin.site.register(Users_Login)
admin.site.register(Users_Data)
admin.site.register(Orders)
admin.site.register(Coffee_order)
