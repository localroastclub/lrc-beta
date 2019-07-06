from rest_framework import serializers

from dashboard.models import Users_Login


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users_Login
        fields = ('id', 'email', 'hashword')
