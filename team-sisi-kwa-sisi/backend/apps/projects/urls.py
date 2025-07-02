from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ProjectUpdateViewSet

router = DefaultRouter()
router.register(r'', ProjectViewSet, basename='project')
router.register(r'updates', ProjectUpdateViewSet, basename='projectupdate')

urlpatterns = router.urls