
function openModal(title, releasedate, actors, desc){
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalReleaseDate").innerHTML = releasedate;
        document.getElementById("modalActors").innerText = actors;
        document.getElementById("modalDesc").innerText = desc;
        document.getElementById("modal").style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(e){
    if (e.target.id == "modal" || e.target.id == "modalTitle" || e.target.id == "modalReleaseDate" || e.target.id == "modalActors" || e.target.id == "modalDesc") closeModal();
}
