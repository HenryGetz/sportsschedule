const pMessage = "Grace Rolston- I've been waiting for the perfect time to ask you to prom. Will you go with me?";
const tDelay = 80;
function itsTime(){
    console.log("It's time...");
    gdiv = document.createElement("div");
    gdiv.classList.add("banner");
    let mediv = document.createElement("div");
    mediv.classList.add("mediv");
    mediv.innerText = "- Henry";
    // div.append(mediv);
    // document.querySelector("#content").appendChild(div);
    navbar = document.body.querySelector("#navbar.navbar");
    navbar.insertBefore(gdiv, document.body.querySelector("#navbar.navbar > svg"));
    navbar.classList.add("itsTime");    
    requestAnimationFrame(addText);
}

tProgress = 0;
function addText() {
    gdiv.innerHTML += pMessage.charAt(tProgress);
    tProgress++;
    setTimeout(addText, tDelay);
}