let sections = document.getElementsByTagName('section')

window.addEventListener('scroll', function(){
for (var i in sections) {
  let position = i*400
  let wrap = sections[i].children
  if (document.documentElement.scrollTop >= position || document.documentElement.scrollTop < position + 500) {
    wrap[0].classList.remove('hidden')
    wrap[0].classList.add('show')
  }
  if (document.documentElement.scrollTop < position || document.documentElement.scrollTop > position + 500) {
    wrap[0].classList.remove('show')
    wrap[0].classList.add('hidden')
  }
}
});
