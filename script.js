function copyDiscord(){
    let text = document.getElementById("discordId").innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied : " + text);
}
function copyGmail(){
    let text = document.getElementById("gmailId").innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied : " + text);
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }