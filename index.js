function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('#nested .target')
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = ranked[i].innerHTML.parseInt() + n
  }
}
