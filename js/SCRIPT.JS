
function displayFrame(value, caller) {
    document.getElementById(value).style.display = 'block';
    console.log("Clicked btn_1");
    document.getElementById(caller).style.backdropFilter = "blur(3px)";
    document.getElementById(caller).style.borderColor = "gray";
}
function hideFrame(value, caller) {
    let frame = document.getElementById(value);
    frame.style.display = 'none';
    document.getElementById(caller).style.backdropFilter = "blur(0px)";
    blurCheck();
}

function resizeFrame(value) {
    frame = document.getElementById(value);
    if (frame.style.width == '400px') {
        frame.style.width = '900px';
    }
    else {
        frame.style.width = '400px';
    }
}
// ------------------------   Button 1 open  -----------------------------
document.getElementById('btn-1').addEventListener("click",
    () => { displayFrame('frame1', 'btn-1') });

// ------------------------   Button 1 Close  -----------------------------
document.getElementById("frame1_Close").addEventListener("click",
    () => { hideFrame('frame1', 'btn-1') });

// ------------------------   Button 1 Resize  -----------------------------
document.getElementById("frame1_Resize").addEventListener("click",
    () => { resizeFrame('frame1', 'btn-1') });

// ------------------------   Button 2 open  -----------------------------
document.getElementById('btn-2').addEventListener("click",
    () => { displayFrame('frame2', 'btn-2') });

// ------------------------   Button 2 Close  -----------------------------
document.getElementById("frame2_Close").addEventListener("click",
    () => { hideFrame('frame2', 'btn-2') });
// ------------------------   Button 1 Resize  -----------------------------
document.getElementById("frame2_Resize").addEventListener("click",
    () => { resizeFrame('frame2', 'btn-2') });

// ------------------------   Button 3 open  -----------------------------
document.getElementById('btn-3').addEventListener("click",
    () => { displayFrame('frame3', 'btn-3') });

// ------------------------   Button 3 Close  -----------------------------
document.getElementById("frame3_Close").addEventListener("click",
    () => { hideFrame('frame3', 'btn-3') });
// ------------------------   Button 1 Resize  -----------------------------
document.getElementById("frame3_Resize").addEventListener("click",
    () => { resizeFrame('frame3', 'btn-3') });



function blurCheck() {
    if (document.getElementById('frame1').style.display === 'block'&&document.getElementById('frame2').style.display === 'block'&&document.getElementById('frame3').style.display === 'block') {
        document.getElementsByTagName('body').style.backdropFilter = '6px';    
    }
    else{
        document.getElementsByTagName('body').style.backdropFilter = '0px';
    }
}