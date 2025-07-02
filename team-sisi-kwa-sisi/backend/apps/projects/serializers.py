from rest_framework import serializers
from .models import Project, ProjectUpdate

class ProjectUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectUpdate
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    updates = ProjectUpdateSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

class ProjectCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['name', 'description', 'location', 'category', 'status', 'created_at']  # Specify fields for creation

class ProjectUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['status', 'updated_at']  # Specify fields for updates