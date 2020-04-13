from django.http import JsonResponse
from django.shortcuts import render

from lrc.models import Roaster
from .serializers import RoasterSerializer

# third party imports
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView


class RoasterListView(ListAPIView):
    queryset = Roaster.objects.all()
    serializer_class = RoasterSerializer
