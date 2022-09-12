from api.models import Data
from api.serializers import DataSerailizers
from rest_framework import viewsets

class APIdata(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerailizers