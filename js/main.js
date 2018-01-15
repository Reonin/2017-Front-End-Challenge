var totalPoints = 6;
var trackArr = [];
var whichTrackArray = ["blocks", "fork", "cake", "crown"];


function clickButton(event, button) {

  if (button.classList[0] == whichTrackArray[0] || button.classList[0] == whichTrackArray[1] || button.classList[0] == whichTrackArray[2] || button.classList[0] == whichTrackArray[3]) {
    trackArr = document.getElementsByClassName("track1")[0].children;
  } else {
    trackArr = document.getElementsByClassName("track2")[0].children;
  }
  if (event.which == 1) {
    addPointsToButton(button);
  } else {
    removePointsFromButton(button);
  }
}


function addPointsToButton(button) {

  console.log(button.value);
  if (totalPoints == 0) {
    return
  } else if (button.value == "false") {
    for (var i = 0; i < trackArr.length; i++) {
      if (trackArr[i].name == button.name) {
        if ((trackArr[i - 2] !== undefined && trackArr[i - 2].value == "true") || (trackArr[i].name == 1)) {
          totalPoints = totalPoints - 1;
          document.getElementsByClassName("mutablePoint")[0].innerText = totalPoints;
          button.value = "true";
          button.classList.add("highlightBorder");
          button.classList.remove("off");
          button.classList.add("on");

        }
      }
    }
  }
}


function removePointsFromButton(button) {
  if (totalPoints == 6) {
    return
  } else if (button.value == "true") {
    for (var i = 0; i < trackArr.length; i++) {
      if (trackArr[i].name == button.name) {
        if ((trackArr[i + 2] !== undefined && trackArr[i + 2].value == "false") || (trackArr[i].name == 4)) {
          totalPoints = totalPoints + 1;
          document.getElementsByClassName("mutablePoint")[0].innerText = totalPoints;
          button.value = "false";
          button.classList.remove("highlightBorder");
          button.classList.remove("on");
          button.classList.add("off");
        }
      }
    }
  }
}
