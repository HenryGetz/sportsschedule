var testDate;


//Comment out the below in order to make the script work
testDate = new Date("5/29/2024 10:19");



const styles = {
  lego: {
    color: "black",
    background: "powderblue",
    navbar: "midnightblue",
    font: "Nabla",
  },
  greek: {
    color: "white",
    background: "#5CB1E4",
    navbar: "#84858A",
    font: "Caesar+Dressing",
  },
  rodeo: {
    color: "white",
    background: "saddlebrown",
    navbar: "gray",
    font: "Ewert",
  },
  clouds: {
    color: "white",
    background: "#5986ad",
    navbar: "#c1ad49",
    font: "Piedra",
  },
  earthquake: {
    color: "beige",
    background: "saddlebrown",
    navbar: "darkolivegreen",
    font: "Frijole",
  },
  racer: {
    color: "gold",
    background: "midnightblue",
    navbar: "gray",
    font: "Vast+Shadow",
  },
  graffiti: {
    color: "#1d1d64",
    backgroundCover: "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/concrete_layers_02/concrete_layers_02_diff_1k.jpg",
    navbar: "transparent",
    font: "Rubik+Wet+Paint",
  },
  burned: {
    color: "black",
    background: "tan",
    navbar: "saddlebrown",
    font: "Rubik+Burned",
  },
  sharpie: {
    color: "black",
    background: "white",
    navbar: "gray",
    font: "Rubik+Marker+Hatch",
  },
  glitch: {
    color: "white",
    background:
      "url('https://static.vecteezy.com/system/resources/previews/023/498/745/large_2x/glitch-vhs-distortion-screen-video-static-noise-vector.jpg')",
    navbar: "transparent",
    font: "Rubik+Glitch",
  },
  blood: {
    color: "darkred",
    background: "lightgray",
    navbar: "gray",
    font: "Lacquer",
  },
  retro: {
    color: "lime",
    background: "black",
    navbar: "green",
    font: "Handjet",
  },
  spongebob: {
    color: "#fff458",
    background: "#2a3757",
    navbar: "#d07860",
    font: "Galindo",
  },
  pink: {
    color: "#fd5e5e",
    background: "#ffa4e0ff",
    navbar: "#ff699aff",
    font: "Abril Fatface",
  },
  apple: {
    color: "white",
    background: "black",
    navbar: "transparent",
    fontUrl:
      "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff",
    altFontUrl:
      "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff",
  },
  // halloween: {
  //     color: "white",
  //     background: "#FE6702",
  //     navbar: "orange",
  //     font: "Creepster",
  // },
  // barbie: {
  //     background: "url('../static/media/tilebb(1).jpg')",
  //     localFontName: "Dollie Script",
  //     localAltFontName: "Cabin Sketch",
  //     fMod: 180,
  //     fAMod: 120,
  //     icon: "#680068",
  //     color: "darkmagenta",
  //     navbar: "#F496D7",
  // },
  porsche: {
    class: "true",
  },
  packers: {
    class: "true",
  },
};

styleNames = Object.keys(styles);

const fontLinkTemplate = "https://fonts.googleapis.com/css?family=fontName";
const customFont = document.querySelector("#customFont");
let customFontCSS = document.querySelector("#customFontCSS");
let currentName;
function setRandomTheme() {
    // window.open("tinyrickhoffvideo.mp4");
  let randomName;
  randomName =
    Object.keys(styles)[Math.floor(Math.random() * Object.keys(styles).length)];
  while (randomName === currentName || !styleNames.includes(randomName)) {
    randomName =
      Object.keys(styles)[
        Math.floor(Math.random() * Object.keys(styles).length)
      ];
  }
  currentName = randomName;
  styleNames = styleNames.filter((item) => item !== randomName);
  if (styleNames.length === 0) {
    styleNames = Object.keys(styles);
  }
  setTheme(randomName);
}

const fontTypes = {
  otf: "opentype",
  ttf: "truetype",
  woff: "woff",
};

newTheme = false;
if (styles[unescape(localStorage.scheduleStorage)] != null && !newTheme) {
  setTheme(unescape(localStorage.scheduleStorage));
}

function setTheme(name) {
  let theme = styles[name];
  pEl = document.body.querySelector("#prompt");
  // pEl.onclick = "";
  if (styles["apple"] != null) {
    if (name === "rickhoffroll") {
        document.body.querySelector("#prompt").style.fontFamily = "";

    } else if (theme.class !== undefined && theme.class === "true") {
        document.body.dataset.class = name;
    } else {
      document.body.dataset.class = "";
      localStorage.scheduleStorage = escape(name);
      if (theme.font) {
        document.querySelector("#prompt").style.setProperty("--font", "");
        let fontLink = fontLinkTemplate.replace("fontName", theme.font);
        document.querySelector("#prompt").style.fontFamily =
          theme.font.replaceAll("+", " ");
        customFont.href = fontLink;
      } else if (theme.altFontUrl) {
        altFontName = theme.altFontUrl.match(/[^/]+$/g)[0].split(".")[0];
        fontName = theme.fontUrl.match(/[^/]+$/g)[0].split(".")[0];
        customFontCSS.innerHTML = `
        @font-face {
            font-family: "${altFontName}";
            src: url('${theme.altFontUrl}') format('${
          fontTypes[theme.altFontUrl.match(/[^/]+$/g)[0].split(".")[1]]
        }');
        }
        @font-face {
            font-family: "${fontName}";
            src: url('${theme.altFontUrl}') format('${
          fontTypes[theme.altFontUrl.match(/[^/]+$/g)[0].split(".")[1]]
        }');
        }
        `;
        document
          .querySelector("#prompt")
          .style.setProperty("font-family", altFontName);
        document.querySelector("#prompt").style.setProperty("--font", fontName);
      } else {
        document
          .querySelector("#prompt")
          .style.setProperty("font-family", theme.localFontName);
        document
          .querySelector("#prompt")
          .style.setProperty("--font", theme.localAltFontName);
      }
      document.body.style.setProperty("--navbar", theme.navbar);
      document.body.style.setProperty("--font-color", theme.color);
      // document.body.style.setProperty("--bg-color", theme.background)
      if (!theme.backgroundCover) {
          document.body.style.setProperty("background", theme.background);
          document.body.style.setProperty("background-size", "");
        } else {
            document.body.style.setProperty(
                "background",
                `url('${theme.backgroundCover}')`
            );
            document.body.style.setProperty("background-size", "cover !important");
            for (let i = 0; i < 999; i++) {
                document.body.style.setProperty("background-size", "cover");
            }
      }
      if (theme.navcolor) {
        document.body.style.setProperty("--color", theme.navcolor);
        document.body.style.setProperty("--icon-color", theme.navcolor);
      } else {
        document.body.style.setProperty("--color", "white");
        document.body.style.setProperty("--icon-color", "white");
      }
      if (theme.icon) {
        document.body.style.setProperty("--icon-color", theme.icon);
      }
      if (theme.fMod) {
        document.body.style.setProperty("--fMod", theme.fMod);
      } else {
        document.body.style.setProperty("--fMod", "");
      }
      if (theme.fAMod) {
        document.body.style.setProperty("--fAMod", theme.fAMod);
      } else {
        document.body.style.setProperty("--fAMod", "");
      }
    }
  }
}

points = 0;

function incPoints() {
  points += 1;
  if (points >= 5) {
    setRandomTheme();
    points = 0;
  }
}

const endPrompts = [
  [
    "School's out, it's time to",
    "celebrate!",
    "No more homework, isn't that great?",
  ],
  ["Done with classes, it's", "time to shine!", "Enjoy the free time."],
  ["School's over, it's", "party time!", "Celebrate the day's uphill climb."],
  [
    "Out of school, now it's",
    "chillaxing!",
    "No more textbooks, it's relaxing.",
  ],
  [
    "No more lectures, it's",
    "fun o'clock!",
    "Enjoy the freedom around the block.",
  ],
  ["School's out, it's", "time to roam!", "No more classrooms, head home."],
  [
    "School's out, time to",
    "laugh and play!",
    "Leave the stress far, far away.",
  ],
  [
    "School's out, it's time to",
    "celebrate!",
    "No more school, that's pretty great.",
  ],
  [
    "Done with school, it's",
    "time to unwind!",
    "Relax and leave your stress behind.",
  ],
  ["School's over, it's", "party time!", "Celebrate the day, it's all prime."],
  [
    "Out of school, now it's",
    "chill and cheer!",
    "No more textbooks, the coast is clear.",
  ],
  [
    "No more lectures, it's",
    "fun o'clock!",
    "Enjoy the evening, let your laughter rock.",
  ],
  [
    "School's out, it's",
    "time to thrive!",
    "No more classes, embrace the vibe.",
  ],
];

// Example usage:
// const randomIndex = Math.floor(Math.random() * endPrompts.length);
// const randomPrompt = endPrompts[randomIndex].join(" ");
// console.log(randomPrompt);

let stringThing = "";

var whileCount = 0;
const loopDelay = 500;
const plcDates = [
  "9/13",
  "9/27",
  "10/11",
  "11/15",
  "12/6",
  "1/24",
  "2/7",
  "3/13",
  "4/10",
];
const plcRegex = new RegExp("^" + plcDates.join("|^"), "gm");
// const spiritWeekDates = ["9/18", "9/19", "9/20", "9/21", "9/22"];
const spiritWeekDates = [
  "12/18",
  "12/19",
  "12/20",
  "2/26",
  "2/27",
  "2/28",
  "2/29",
  "2/30",
  "4/24",
  "5/17",
];
const spRegex = new RegExp("^" + spiritWeekDates.join("|^"), "gm");

var now = new Date();
if (testDate) {
  now = testDate;
}
var dateText = now.getMonth() + 1 + "/" + now.getDate();
var currentMinute = now.getMinutes();
var currentHour = now.getHours();
var currentYear = now.getFullYear();
// var weekday = now.getDay();
var weekday = 1;
var adjTime = 0;
// var weekday = "test";

function timeText(h, m) {
  return (tText =
    h.toString().padStart(2, "0") + ":" + m.toString().padStart(2, "0"));
}

schedulePrompt = function (b, t, a) {
  element = document.querySelector("#prompt");
  if (element.innerText !== t) {
    element.innerText = t;
  }
  if (element.dataset.before !== b) {
    element.dataset.before = b;
  }
  if (element.dataset.after !== a) {
    element.dataset.after = a;
  }
  if (!(b + t + a).includes("nothing")) {
    document.title = minuteTime(minute);
  }
  if (minuteTime(minute) === "0:00") {
    playBell();
  }
  // textInputEl.innerHTML = t;
  // handleInput();
  // refreshText();
};

let schedules = oshSchedules;
// let schedules = neenSchedules;

var timeDict, times;
function updateDay() {
  if (dateText.match(plcRegex) !== null) {
    timeDict = schedules.plc;
  } else if (dateText.match(spRegex) !== null) {
    timeDict = schedules[dateText];
  } else {
    switch (weekday) {
      case 1:
        timeDict = schedules.mwth;
        break;
      case 2:
        timeDict = schedules.t;
        break;
      case 3:
        timeDict = schedules.mwth;
        break;
      case 4:
        timeDict = schedules.mwth;
        break;
      case 5:
        timeDict = schedules.f;
        break;
      case "test":
        timeDict = schedules.test;
        break;
      default:
        schedulePrompt("Sorry, but there's", "nothing", "coming up today");
        document.querySelector("#prompt").onclick = "";
        document.title = "Schedule";
    }
  }
  times = [];
  if (timeDict !== undefined) {
    for (var item of Object.values(timeDict)) {
      var array = item.split("-");
      times.push(array);
    }
    update();
  }
}

let minute, hour, timeout;
let style = 1;
function update() {
  date = new Date();
  if (testDate) {
    date = testDate;
  }
  //Comment out the line below to stop testing a specific time
  // date = new Date("4/6/2023 12:03");

  if (now.getDay() !== new Date().getDay() && !testDate) {
    updateDay();
  }

  nowHour = date.getHours();
  nowMinute = date.getMinutes() + adjTime;

  hour = 0;
  minute = 1;
  var result;
  whileCount = 0;
  while (result === undefined && whileCount < 1000) {
    hour = Math.trunc((nowMinute + minute) / 60);
    timeText(
      nowHour + Math.trunc((minute + nowMinute) / 60),
      minute - 60 * hour + nowMinute
    );
    for (var period of times) {
      for (var pTime of period) {
        if (tText === pTime) {
          pTimeIndex = period.indexOf(pTime);
          periodFig = periodText(Object.keys(timeDict)[times.indexOf(period)]);
          timeout = setTimeout(update, loopDelay);
          switch (pTimeIndex) {
            case 0:
              switch (style) {
                case 0:
                  return schedulePrompt(
                    "You have",
                    minuteText(minute).toLowerCase(),
                    "until " + periodFig + " starts"
                  );
                case 1:
                  let time =
                    nowHour +
                    Math.trunc(minute / 60) +
                    ":" +
                    (minute - 60 * hour + nowMinute) +
                    ":" +
                    (60 - new Date().getSeconds());
                  return schedulePrompt(
                    "You have",
                    minuteTime(minute),
                    "until " + periodFig + " starts"
                  );
              }
            case 1:
              switch (style) {
                case 0:
                  return schedulePrompt(
                    "You have",
                    minuteText(minute).toLowerCase(),
                    "until " + periodFig + " ends"
                  );
                case 1:
                  return schedulePrompt(
                    "You have",
                    minuteTime(minute),
                    "until " + periodFig + " ends"
                  );
              }
          }
        }
      }
    }
    minute += 1;
    if (minute / 60 + nowHour > 24) {
      const randomIndex = Math.floor(Math.random() * endPrompts.length);
      schedulePrompt(
        endPrompts[randomIndex][0],
        endPrompts[randomIndex][1],
        endPrompts[randomIndex][2]
      );
      document.title = "Schedule";
      return;
    }
    whileCount += 1;
  }
  if (whileCount > 1000) {
    console.error("We couldn't find anything within a thousand iters");
    return;
  }
  console.log("a");
}

function minuteText(num) {
  if (num === undefined) return "";
  // Handle undefined input

  num = parseFloat(num);

  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  if (hours === 0 && minutes === 0) {
    return "0 minutes";
  } else if (hours === 0) {
    if (minutes === 1) {
      return `${minutes} minute`;
    } else {
      return `${minutes} minutes`;
    }
  } else if (minutes === 0) {
    if (hours === 1) {
      return `${hours} hour`;
    } else {
      return `${hours} hours`;
    }
  } else {
    const hourText = hours === 1 ? "hour" : "hours";
    const minuteText = minutes === 1 ? "minute" : "minutes";
    return `${hours} ${hourText} and ${minutes} ${minuteText}`;
  }
}

function minuteTime(num) {
  let hourT = (minuteT = "");
  if (Math.trunc(minute / 60) !== 0) {
    hourT = Math.trunc(minute / 60) + ":";
  }
  minuteT = minute - 60 * Math.trunc(minute / 60) - 1;
  let secondT = (60 - new Date().getSeconds()).toString().padStart(2, "0");
  if (secondT === "60") {
    secondT = "00";
    minuteT += 1;
  }

  return hourT + minuteT + ":" + secondT;
}

function periodText(inp) {
  switch (inp) {
    case "C":
      return "Chapel";
    case "D":
      return "D-Groups";
    case "CD":
      return "Chapel/D-Groups";
    case "L":
      return "Lunch";
    case "H":
      return "H-Hour";
    case "1":
      return "1st session";
    case "2":
      return "2nd session";
    case "3":
      return "3rd session";
    case "R":
      return "Recess";
    case "0":
      return "H-Hour/D-Groups";
    //Spirit Week cases
    case "SP-M":
      return "volleyball";
    case "SP-W":
      return "the powderpuff game";
    case "CRT":
      return "court presentation";
    case "1F":
      return "1st final";
    case "2F":
      return "2nd final";
    case "3F":
      return "3rd final";
    case "4F":
      return "4th final";
    case "5F":
      return "5th final";
    case "6F":
      return "6th final";
    case "7F":
      return "Final final";
    default:
      return inp + "th period";
  }
}

function toggleStyle() {
  clearTimeout(timeout);
  style += 1;
  if (style > 1) {
    style = 0;
  }
  update();
}

updateDay();

var bell = new Audio("../static/media/bell.mp3");

function playBell() {
  bell.play();
}

window.addEventListener("keydown", function (e) {
  stringThing += e.key;
  if (e.code === "Enter" && e.ctrlKey === true) {
    playBell();
  }
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Enter" && e.ctrlKey === true) {
    playBell();
  }
  if (stringThing === atob("YTtzbGRrZmo=")) {
    input = parseInt(
      window.prompt(
        atob(
          "SG93IG1hbnkgbWludXRlcyB3b3VsZCB5b3UgbGlrZSB0byBhZGp1c3QgdGhlIHRpbWUgYnk/"
        )
      )
    );
    if (!isNaN(input)) {
      adjTime = input;
    }
  }
  stringThing = "";
});

let helperDiv;
function toggleCampus() {
  if (helperDiv.innerText.contains("")) {
  } else {
  }
}

let input = document.querySelector("#input");
input.addEventListener("keydown", function (e) {
  if (e.code === "Backspace") {
    input.innerHTML = "";
  }
  if (e.code === "Enter") {
    console.log("lol ");
    e.preventDefault();
    parseSchedule();
  }
});

function parseSchedule() {
  courseHtml = input.querySelector("table:nth-child(2) > tbody");
  timeHtml = input.querySelector("#AutoNumber2 > tbody");
}

// Define the URL of the Google Sheets CSV file
const csvUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSimvdzuvl9bkci5Iszv9SZkKmmkPQQoJbpjYTA-5RRTMhslY4Ii7mRz98wa49yOdaIf0RyOU7zylsN/pub?gid=163195620&single=true&output=csv";

// Function to fetch and process CSV data
csvObj = {};
function fetchCSVData() {
  csvObj = {};
  fetch(csvUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((csvData) => {
      // Process the CSV data
      let rows = csvData.split("\r\n");
      for (let row of rows) {
        row = row.split(",");
        csvObj[row[0]] = row[1];
      }
      useCsvData();
      // You can perform further processing or display the data as needed
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function useCsvData() {
  console.log(csvObj);
}

// setTheme("porsche");
setTheme("packers");