
function gpuCal() {
    var gpu = document.getElementById('gpu').value;
    alert(gpu);
    }

var GPUs = { 
    AMD: ['Athlon 660', 'GX340'],
    Nvidia: [['Nvidia GeForce RTX 3090', '100.0%', 'GA102', '350W', ' GeForce RTX 3090'],
    ['Nvidia GeForce RTX 3080', '93.0%', 'GA102', '320W', ' GeForce RTX 3080'],
    ['Nvidia Titan RTX', '79.3%', 'TU102', '280W', ' Titan RTX'],
    ['Nvidia GeForce RTX 2080 Ti',
     '77.5%',
     'TU102',
     '260W',
     ' GeForce RTX 2080 T'],
    ['Nvidia Titan V', '68.7%', 'GV100', '250W', ' Titan V'],
    ['Nvidia GeForce RTX 2080 Super',
     '66.9%',
     'TU104',
     '250W',
     ' GeForce RTX 2080 Super'],
    ['Nvidia GeForce RTX 2080', '62.6%', 'TU104', '225W', ' GeForce RTX 2080'],
    ['Nvidia Titan Xp', '61.2%', 'GP102', '250W', ' Titan Xp'],
    ['Nvidia GeForce RTX 2070 Super',
     '59.7%',
     'TU104',
     '215W',
     ' GeForce RTX 2070 Super'],
    ['Nvidia GeForce GTX 1080 Ti',
     '57.8%',
     'GP102',
     '250W',
     ' GeForce GTX 1080 T'],
    ['Nvidia GeForce RTX 2070', '53.1%', 'TU106', '185W', ' GeForce RTX 2070'],
    ['Nvidia GeForce RTX 2060 Super',
     '50.6%',
     'TU106',
     '175W',
     ' GeForce RTX 2060 Super'],
    ['Nvidia GeForce GTX 1080', '45.3%', 'GP104', '180W', ' GeForce GTX 1080'],
    ['Nvidia GeForce RTX 2060', '44.9%', 'TU106', '160W', ' GeForce RTX 2060'],
    ['Nvidia GeForce GTX 1070 Ti',
     '41.9%',
     'GP104',
     '180W',
     ' GeForce GTX 1070 T'],
    ['Nvidia GeForce GTX 1660 Ti',
     '38.0%',
     'TU116',
     '120W',
     ' GeForce GTX 1660 T'],
    ['Nvidia GeForce GTX 1660 Super',
     '37.9%',
     'TU116',
     '125W',
     ' GeForce GTX 1660 Super'],
    ['Nvidia GeForce GTX 1070', '36.8%', 'GP104', '150W', ' GeForce GTX 1070'],
    ['Nvidia GTX Titan X (Maxwell)',
     '35.3%',
     'GM200',
     '250',
     ' GTX Titan X (Maxwell)'],
    ['Nvidia GeForce GTX 980 Ti', '33.0%', 'GM200', '250W', ' GeForce GTX 980 T'],
    ['Nvidia GeForce GTX 1660', '32.9%', 'TU116', '120W', ' GeForce GTX 1660'],
    ['Nvidia GeForce GTX 1650 Super',
     '28.5%',
     'TU116',
     '100W',
     ' GeForce GTX 1650 Super'],
    ['Nvidia GeForce GTX 1060 6GB',
     '26.5%',
     'GP106',
     '120W',
     ' GeForce GTX 1060 6GB'],
    ['Nvidia GeForce GTX 980', '26.5%', 'GM204', '165W', ' GeForce GTX 980'],
    ['Nvidia GTX 1650 GDDR6', '23.9%', 'TU117', '75W', ' GTX 1650 GDDR6'],
    ['Nvidia GeForce GTX 1060 3GB',
     '22.3%',
     'GP106',
     '120W',
     ' GeForce GTX 1060 3GB'],
    ['Nvidia GeForce GTX 970', '22.2%', 'GM204', '145W', ' GeForce GTX 970'],
    ['Nvidia GeForce GTX 1650', '20.9%', 'TU117', '75W', ' GeForce GTX 1650'],
    ['Nvidia GeForce GTX 1050 Ti',
     '16.1%',
     'GP107',
     '75W',
     ' GeForce GTX 1050 T'],
    ['Nvidia GeForce GTX 1050', '12.2%', 'GP107', '75W', ' GeForce GTX 1050'],
    ['Nvidia GeForce GT 1030', '5.8%', 'GP108', '30W', ' GeForce GT 1030']] 
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