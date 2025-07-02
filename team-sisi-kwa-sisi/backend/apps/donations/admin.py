from django.contrib import admin
from .models import Donation, TransactionRecord

admin.site.register(Donation)
admin.site.register(TransactionRecord)