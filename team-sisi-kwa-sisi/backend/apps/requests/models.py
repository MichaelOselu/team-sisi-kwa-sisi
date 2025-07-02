from django.db import models
from django.conf import settings

class HelpRequest(models.Model):
    CATEGORY_CHOICES = [
        ('medical', 'Medical'),
        ('school_fees', 'School Fees'),
        ('rent', 'Rent'),
        ('disaster_relief', 'Disaster Relief'),
        # Add more categories as needed
    ]

    URGENCY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('critical', 'Critical'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    urgency = models.CharField(max_length=50, choices=URGENCY_CHOICES)
    story = models.TextField()
    media = models.FileField(upload_to='help_requests/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.category} - {self.urgency}"