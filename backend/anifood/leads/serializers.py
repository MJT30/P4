from dataclasses import fields
import imp
from pyexpat import model
from rest_framework import serializers
from leads.models import Lead


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
