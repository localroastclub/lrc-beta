from django.http import JsonResponse
from django.shortcuts import render

# app imports
from lrc.models import Roaster
from .serializers import RoasterSerializer

# rest framework imports
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView


class RoasterListView(ListAPIView):
    queryset = Roaster.objects.all()
    serializer_class = RoasterSerializer


class RoasterDetailView(RetrieveAPIView):
    queryset = Roaster.objects.all()
    serializer_class = RoasterSerializer
