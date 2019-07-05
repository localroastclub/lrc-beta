from rest_framework import serializers

from dashboard.models import Roasters


class RoasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roasters
        fields = ('id', 'name')
