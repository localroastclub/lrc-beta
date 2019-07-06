from django.urls import path

from .views import UserLoginListView

urlpatterns = [
    path('', UserLoginListView.as_view())
]
