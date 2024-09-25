from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_therapist = models.BooleanField(default=False)

class Therapist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=255)

class Session(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    session_date = models.DateTimeField()
    notes = models.TextField(null=True, blank=True)
