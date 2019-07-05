from rest_framework import serializers

from dashboard.models import Roasters


class RoasterSerializer(serializer.Model):
    class Meta:
        model = Roasters
        fields = ('name')
