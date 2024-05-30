const files = {
    "smoke.png" : "iVBORw0KGgoAAAANSUhEUgAAAMgAAADNCAIAAABy96h6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFw2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTAtMTZUMTk6NDY6NTcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTExLTAzVDE3OjI1OjI3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTExLTAzVDE3OjI1OjI3KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MGMwYTFiZC1iNjdkLTQwZDctOTUyZS03Zjg3NWU5OTQwNjUiIHhtcE1NOkRvY3VtZW50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",
    // "" : "",
}

const mime = {
    "png" : "image/png",
    "webp" : "image/webp",
    "jpg" : "image/jpg",
    "glb" : "model/gltf-binary"
}

var warningGiven = false;

function file(name) {
    if (!window.location.href.replace(/^.*\:\/\//, "").includes(":") && !window.location.href.includes("file") || window.location.href.includes("localhost")) {
        if (!warningGiven) {
            console.log("Loading files from the server...");
            warningGiven = true;
        }
        return "../static/threejs/media/" + name;
    } else {
        if (files[name] != undefined) {
            if (mime[name.split(".")[1]] != undefined) {
                if (!warningGiven) {
                    console.log("Loading files from base64...");
                    warningGiven = true;
                }
                return "data:" + mime[name.split(".")[1]] + ";base64," + files[name];
            } else {
                console.error("'" + name.split(".")[1] + "' is not in your MIME mappings!")
            }
        } else {
            console.error("'" + name + "' is not encoded in your files.js!");
        }
    }
};