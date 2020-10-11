function gpuOptions(value) {
    if (value.length == 0) document.getElementById("gpu").innerHTML = "<option></option>";
    else {
        var gpuSelect = "";
        for (categorypd in GPUs2[value]) {
            gpuSelect += "<option>" + Object.keys(GPUs2.categorypd)[0][0][3] + "</option>";
        }
        document.getElementById("GPUSel").innerHTML = gpuSelect;
        var e = document.getElementById("GPUSel");
                var strGpu = e.options[e.selectedIndex].text;
            finalGPU = strGpu;
    }
};

function cpuOptions(value) {
    if (value.length == 0) document.getElementById("cpu").innerHTML = "<option></option>";
    else {
        var cpuSelect = "";
        for (categoryId in CPUs[value]) {
            cpuSelect += "<option>" + CPUs[value][categoryId][0] + "</option>";
        }
        document.getElementById("CPUSel").innerHTML = cpuSelect;
        var a = document.getElementById("CPUSel");
                var strCPU = a.options[a.selectedIndex].text;
            finalCPU = strCPU;
    }
};

function storageS(value) {
    const storageType = { 
        HDD: {1:'1TB',2:'2TB',4:'4TB'},
        SSD: {1:'1TB',2:'2TB',4:'4TB'}
    };
    if (value.length == 0) document.getElementById("storage").innerHTML = "<option></option>";
    else {
        var StorageSelect = "";
        for (categoryId in storageType[value]) {
            StorageSelect += "<option>" + storageType[value][categoryId] + "</option>";
        }
        document.getElementById("StorageSelect").innerHTML = StorageSelect;
    }
};

var gpu = document.getElementById('gpu').value;

function finalCal() {
    document.getElementById("result").innerHTML = finalGPU + " " + finalCPU;
    };