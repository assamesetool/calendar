var source;
function dragStarted(evt) {
    source = evt.target;
    evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
    evt.dataTransfer.effectAllowed = "move";
    document.getElementById('uldPopup').style.display = "none";
}

function draggingOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
}

function draggingLeave(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
}
function newgame() {
    window.location.replace("../game.html");}
function play() {
        var audio = document.getElementById("audio");
        audio.loop = true;
        audio.play();}
function dragplay() {
        var audio = document.getElementById("audiodrag");
        audio.loop = false;
        audio.play();}
function winplay() {
        var audio = document.getElementById("audiowin");
        audio.loop = false;
        audio.play();}
