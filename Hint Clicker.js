<script>
if (typeof hintClicker_keyUp !== "function") {
  var hintClicker_keyUp = function(e) {
    if (e.key === "h") {
      revealFirstHint();
    } else if (e.key === "g") {
      revealAllHints();
    }
  };
  document.addEventListener("keyup", hintClicker_keyUp, false);
}

function revealFirstHint() {
  var firstHint = document.querySelector("a.hint:not([style])")
  firstHint.click();
}

function revealAllHints() {
  var allHints = document.getElementsByClassName("hint")
	var i;
  for (i = 0; i < allHints.length; i++) {
       allHints[i].click()
  }	
}
</script>
