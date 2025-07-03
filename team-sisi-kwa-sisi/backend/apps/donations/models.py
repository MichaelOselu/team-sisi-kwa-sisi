from django.db import models
from django.conf import settings

class Donation(models.Model):
    DONATION_METHODS = [
        ('CASH', 'Cash'),
        ('INKIND', 'In-kind'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    method = models.CharField(max_length=10, choices=DONATION_METHODS)
    message = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    case = models.ForeignKey('requests.HelpRequest', on_delete=models.CASCADE, default=None)

    def __str__(self):
        return f"{self.user.username} - {self.amount} - {self.method}"

class TransactionRecord(models.Model):
    donation = models.ForeignKey(Donation, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Transaction {self.transaction_id} for {self.donation}"