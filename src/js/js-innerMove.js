(function () {
  var el = document.getElementById('sprite')
  var imgWidth = 300
  var k = 20
  var i = 0
  el.style = "transform: translate3d(0, 0, 0)"
  function moveInner() {
    el.style = `transform: translate3d(-${imgWidth * i}px, 0, 0)`
    i++
    i = i % k
    window.requestAnimationFrame(moveInner)
  }
  window.requestAnimationFrame(moveInner)
})()