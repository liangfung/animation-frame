(function () {
  var sprite = document.getElementById('sprite'),
    imgWidth = 300,
    k = 20,
    i = 0;

  sprite.style = "background-position: 0 0"

  function changePosition() {
    sprite.style = `background-position: -${imgWidth * i}px 0`
    i++
    i = i % k
    window.requestAnimationFrame(changePosition)
  }
  window.requestAnimationFrame(changePosition)
})()