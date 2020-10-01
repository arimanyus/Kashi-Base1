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

function storageS(value) {
    const storageType = { 
        HDD: ['1TB' : 1, '2TB' : 2, '4TB' : 4]
        SSD: ['1TB' : 1, '2TB' : 2, '4TB' : 4]
    }
    if (value.length == 0) document.getElementById("storage").innerHTML = "<option></option>";
    else {
        var StorageSelect = "";
        for (categoryId in storageType[value]) {
            StorageSelect += "<option>" + storageType[value][categoryId] + "</option>";
        }
        document.getElementById("RAMSel").innerHTML = StorageSelect;
    }
}