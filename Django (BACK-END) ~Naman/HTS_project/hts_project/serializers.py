from rest_framework import serializers
from .models import User, Therapist, Session

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_therapist']

class TherapistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Therapist
        fields = '__all__'

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'
