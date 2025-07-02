from django.db import models
from django.conf import settings

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    beneficiaries = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='projects', blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class ProjectUpdate(models.Model):
    project = models.ForeignKey(Project, related_name='updates', on_delete=models.CASCADE)
    update_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Update for {self.project.title} on {self.created_at}'