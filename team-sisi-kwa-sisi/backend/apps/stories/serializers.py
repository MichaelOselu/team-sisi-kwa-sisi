from rest_framework import serializers
from .models import SuccessStory

class SuccessStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStory
        fields = '__all__'  # Include all fields from the SuccessStory model

class SuccessStoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStory
        fields = ['title', 'description', 'image', 'date']  # Specify fields for creation

class SuccessStoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStory
        fields = ['id', 'title', 'description', 'image', 'date', 'updated_at']  # Include additional fields for detail view