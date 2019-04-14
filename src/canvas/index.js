(function () {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')
  var width = 300
  var heigth = 300
  var img = new Image()
  var k = 20
  var i = 0

  img.src = '../../image/image.jpg'

  function drawImg() {
    context.clearRect(0, 0, width, heigth)
    i++
    i = i % k
    context.drawImage(img, i * width, 0, width, heigth, 0, 0, width, heigth)
    window.requestAnimationFrame(drawImg)
  }
  img.onload = function () {
    window.requestAnimationFrame(drawImg)
  }
})()