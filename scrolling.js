let sections = document.getElementsByTagName('section')

window.addEventListener('scroll', function(){
for (var i in sections) {
  let position = i*400
  if (document.documentElement.scrollTop >= position || document.documentElement.scrollTop < position + 400) {
    divs[i].classList.remove('hidden')
    divs[i].classList.add('show')
  }
  if (document.documentElement.scrollTop < position || document.documentElement.scrollTop > position + 400) {
    divs[i].classList.remove('show')
    divs[i].classList.add('hidden')
  }
}
});
