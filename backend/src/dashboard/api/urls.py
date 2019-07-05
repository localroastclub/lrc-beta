from django.urls import path

from .views import RoasterListView

urlpatterns = [
    path('', RoasterListView.as_view())
]
