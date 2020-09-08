from django import forms

from .models import GPU

class GPUForm(forms.ModelForm):

    class Meta:
        model = GPU
        fields = '__all__'