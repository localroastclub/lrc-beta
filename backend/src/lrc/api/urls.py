from django.urls import path

from .views import RoasterListView, RoasterDetailView

urlpatterns = [
    path('roaster/', RoasterListView.as_view()),
    path('roaster/<pk>', RoasterDetailView.as_view())
]
