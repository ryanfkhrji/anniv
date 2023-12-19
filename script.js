// cover
const text = ["happy anniversary"];

function typeWriter(text, i, callback) {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(text, i, callback);
    }, 50);
  } else {
    setTimeout(callback, 2000);
  }
}

function displayLyrics() {
  let lineIndex = 0;
  function displayLine() {
    if (lineIndex < text.length) {
      document.getElementById("title").innerHTML = "";
      typeWriter(text[lineIndex], 0, function () {
        lineIndex++;
        displayLine();
      });
    }
  }
  displayLine();
}

displayLyrics();
