from rest_framework import serializers
from api.models import Data
class DataSerailizers(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = "__all__"