from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('apps.accounts.urls')),
    path('api/requests/', include('apps.requests.urls')),
    path('api/donations/', include('apps.donations.urls')),
    path('api/stories/', include('apps.stories.urls')),
    path('api/projects/', include('apps.projects.urls')),
]

# Add this for serving media files in development
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)