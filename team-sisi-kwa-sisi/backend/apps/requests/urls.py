from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import HelpRequestViewSet

router = DefaultRouter()
router.register(r'', HelpRequestViewSet, basename='help-request')

urlpatterns = router.urls