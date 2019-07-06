from rest_framework.generics import ListAPIView

from dashboard.models import Users_Login
from .serializers import UserLoginSerializer


class UserLoginListView(ListAPIView):
    queryset = Users_Login.objects.all()
    serializer_class = UserLoginSerializer
