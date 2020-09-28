function gpuCal() {
    var gpu = document.getElementById('gpu').value;
    alert(gpu);
    }

function gpuOptions(value) {
    if (value.length == 0) document.getElementById("gpu").innerHTML = "<option></option>";
    else {
        var gpuSelect = "";
        for (categoryId in GPUs[value]) {
            gpuSelect += "<option>" + GPUs[value][categoryId][2] + "</option>";
        }
        document.getElementById("GPUSel").innerHTML = gpuSelect;
    }
}

function cpuOptions(value) {
    if (value.length == 0) document.getElementById("cpu").innerHTML = "<option></option>";
    else {
        var cpuSelect = "";
        for (categoryId in CPUs[value]) {
            cpuSelect += "<option>" + CPUs[value][categoryId][0] + "</option>";
        }
        document.getElementById("CPUSel").innerHTML = cpuSelect;
    }
}