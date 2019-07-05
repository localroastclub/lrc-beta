from rest_framework.generics import ListAPIView

from dashboard.models import Roasters
from .serializers import RoasterSerializer


class RoasterListView(ListAPIView):
    queryset = Roasters.objects.all()
    serializer_class = RoasterSerializer
