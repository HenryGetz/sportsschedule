if (localStorage.getItem('darkmode') != null) {
    document.body.className = JSON.parse(localStorage.getItem('darkmode'));
} else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className = "dark";
    }
    localStorage.setItem('darkmode', JSON.stringify(document.body.className));
}
setTimeout(()=>{
    var transitionDuration = "350ms";
    document.body.style.transitionDuration = transitionDuration;
    if (document.getElementById("sun") != null) {
        document.getElementById("sun").style.transitionDuration = transitionDuration;
    }
    if (document.getElementById("sunrays") != null) {
        document.getElementById("sunrays").style.transitionDuration = transitionDuration;
    }
}
, 0);

function toggleDark() {
    if (document.body.className === 'light') {
        document.body.className = 'dark';
    } else {
        document.body.className = 'light';
    }
    localStorage.setItem('darkmode', JSON.stringify(document.body.className));
    return document.body.className;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event=>{
    document.body.className = event.matches ? "dark" : "light";
});
