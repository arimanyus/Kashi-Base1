from django.db import models

A1 = 'AMD'
A2 = 'NVIDIA'

B1 = 'RADEON'
B2 = 'GeForce'


MFG_CHOICES = [
    (A1, A1),
    (A2, A2),
]

GPU_CHOICES = [
    (B1, B1),
    (B2, B2),
]

def get_mfg_strings():
    mfg_strings = [
        A1,
        A2,
    ]
    return mfg_strings

def get_gpu_strings():
    gpu_strings = [
        B1,
        B2,
    ]
    return gpu_strings

class GPU(models.Model):
    mfg = models.CharField(max_length=50, choices=MFG_CHOICES)
    gpu = models.CharField(max_length=50, choices=GPU_CHOICES)