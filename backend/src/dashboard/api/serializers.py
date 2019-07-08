from rest_framework import serializers

from dashboard.models import Roaster


class RoasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roaster
        fields = ('id', 'name', 'logo_url', 'description')
