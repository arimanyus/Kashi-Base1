from django.shortcuts import render
import json
from .models import GPU, get_mfg_strings, get_gpu_strings
from .forms import GPUForm

def home(request):
    context = {}
    gpuform = GPUForm()

    mfg_strings = get_mfg_strings()
    gpu_strings = get_gpu_strings()

    json_mfg_strings = json.dumps(mfg_strings)
    json_gpu_strings = json.dumps(gpu_strings)

    context['json_mfg_strings'] = json_mfg_strings
    context['json_cpu_strings'] = json_gpu_strings

    return render(request, 'index.html', context)

def home2(request):
    context = {}
    gpuform = GPUForm()

    mfg_strings = get_mfg_strings()
    gpu_strings = get_gpu_strings()

    json_mfg_strings = json.dumps(mfg_strings)
    json_gpu_strings = json.dumps(gpu_strings)

    context['json_mfg_strings'] = json_mfg_strings
    context['json_cpu_strings'] = json_gpu_strings

    return render(request, 'index2.html', context)