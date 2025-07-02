from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import SuccessStoryViewSet

router = DefaultRouter()
router.register(r'', SuccessStoryViewSet, basename='successstory')

urlpatterns = router.urls