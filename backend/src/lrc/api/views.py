from rest_framework.generics import ListAPIView

from lrc.models import Roaster
from .serializers import RoasterSerializer


class RoasterListView(ListAPIView):
    queryset = Roaster.objects.all()
    serializer_class = RoasterSerializer