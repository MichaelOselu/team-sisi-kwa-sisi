from rest_framework import viewsets, permissions
from .models import Donation, TransactionRecord
from .serializers import DonationSerializer, TransactionRecordSerializer

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TransactionRecordViewSet(viewsets.ModelViewSet):
    queryset = TransactionRecord.objects.all()
    serializer_class = TransactionRecordSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]