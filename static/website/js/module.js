
function gpuCal() {
    var gpu = document.getElementById('gpu').value;
    alert(gpu);
    }

var GPUs = { 
    AMD: ['Athlon 660', 'GX340'],
    Nvidia: ['GTX 1660', 'GTX 1660 Ti']   
 }

 function gpuOptions(value) {
    if (value.length == 0) document.getElementById("gpu").innerHTML = "<option></option>";
    else {
        var gpuSelect = "";
        for (categoryId in GPUs[value]) {
            gpuSelect += "<option>" + GPUs[value][categoryId] + "</option>";
        }
        document.getElementById("GPUSel").innerHTML = gpuSelect;
    }
}