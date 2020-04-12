from django.contrib import admin

from .models import User
from .models import Order
from .models import Subscription
from .models import Roaster
from .models import Product
from .models import Order_item


admin.site.register(User)
admin.site.register(Order)
admin.site.register(Subscription)
admin.site.register(Roaster)
admin.site.register(Product)
admin.site.register(Order_item)
