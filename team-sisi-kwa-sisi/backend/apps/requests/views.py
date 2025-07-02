from rest_framework import viewsets, permissions
from .models import HelpRequest
from .serializers import HelpRequestSerializer

class HelpRequestViewSet(viewsets.ModelViewSet):
    queryset = HelpRequest.objects.all()
    serializer_class = HelpRequestSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return HelpRequest.objects.filter(beneficiary=user)  # Adjust based on user roles if necessary