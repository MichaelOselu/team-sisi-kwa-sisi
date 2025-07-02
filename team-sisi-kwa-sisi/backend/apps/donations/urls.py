from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import DonationViewSet, TransactionRecordViewSet

router = DefaultRouter()
router.register(r'', DonationViewSet, basename='donation')
router.register(r'transactions', TransactionRecordViewSet, basename='transactionrecord')

urlpatterns = router.urls