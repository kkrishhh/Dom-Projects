var a = document.getElementById('add');
a.addEventListener('click', function(){
    document.getElementById('status').innerText = "Friend";
    a.style.backgroundColor = "green";
    a.style.color = "white";
    a.style.fontWeight = "700";
    a.disabled = true;
    a.innerText = "Friend Added";
    b.innerText = "Remove";
    b.style.backgroundColor = "red";
    b.style.color = "white";
    b.style.fontWeight = "700";
    b.disabled = false;
    h5 = document.getElementById('status');
    h5.style.color = "green";
    h5.style.fontWeight = "700";
})

var b = document.getElementById('remove');
b.addEventListener('click', function() {
    document.getElementById('status').innerText = "Stranger";
    b.style.backgroundColor = "red";
    b.style.color = "white";
    b.style.fontWeight = "700";
    b.disabled = true;
    b.innerText = "Removed";
    a.innerText = "Add Friend";
    a.style.backgroundColor = "cadetblue";
    a.style.color = "white";
    a.style.fontWeight = "700";
    a.disabled = false;
    h5.style.color = "red";
    
})