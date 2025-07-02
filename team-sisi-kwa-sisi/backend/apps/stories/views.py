from rest_framework import viewsets
from .models import SuccessStory
from .serializers import SuccessStorySerializer

class SuccessStoryViewSet(viewsets.ModelViewSet):
    queryset = SuccessStory.objects.all()
    serializer_class = SuccessStorySerializer

    def perform_create(self, serializer):
        serializer.save()