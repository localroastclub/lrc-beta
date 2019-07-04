from django.contrib import admin

from .models import Users_Login
from .models import Users_Data
from .models import Roasters
from .models import Coffee
from .models import Orders


admin.site.register(Users_Login)
admin.site.register(Users_Data)
admin.site.register(Roasters)
admin.site.register(Coffee)
admin.site.register(Orders)
