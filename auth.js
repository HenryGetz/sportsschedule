function hasPaid(add) {
    for (let index = 0; index < emails.length; index++) {
        if (btoa(add) === emails[index]) {
            return true;
        }
    }
    return false;
}

let token = {};
token.needsRefresh = function() {
    return true
}
;
const client = google.accounts.oauth2.initTokenClient({
    client_id: "1046788463006-v2kt4m2mjm0jrhf58jd4m3t31tu7nqrb.apps.googleusercontent.com",
    //This is your client ID.
    scope: "https://www.googleapis.com/auth/userinfo.email",
    callback: (tokenResponse)=>{
        if (tokenResponse && tokenResponse.access_token) {
            token = tokenResponse;
            token.expireTime = new Date().getTime() + token.expires_in * 1000;
            ;token.needsRefresh = function() {
                if (new Date().getTime() >= token.expireTime) {
                    return true;
                } else {
                    return false;
                }
            }
            getEmail();
        }
    }
    ,
});

function getEmail() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/oauth2/v1/tokeninfo");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + token.access_token);
    xhr.onload = function() {
        console.log(JSON.parse(this.response));
        email = JSON.parse(this.response).email;
        if (hasPaid(email)) {
            console.log("hooray! you actually paid!");
        } else {
            console.log("boo! you are a free loader!");
        }
    }
    ;
    xhr.send();
}
