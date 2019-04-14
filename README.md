使用css和JS来做帧动画

其中，JS用了三中方案

1. js控制div的 `background-position`
2. js控制div的 `transform: translate3d`，外层用div包裹，overflow: hidden
3. js动态画canvas

为了性能，JS的方案都需要使用 `requestAnimationFrame`