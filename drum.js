var boom = document.getElementById('boombutton')
var clap = document.getElementById('clapbutton')
var snare = document.getElementById('snarebutton')

clap.addEventListener('click', function () {
  document.getElementById('clap').play()
})
boom.addEventListener('click', function () {
  document.getElementById('boom').play()
})
snare.addEventListener('click', function () {
  document.getElementById('snare').play()
})
