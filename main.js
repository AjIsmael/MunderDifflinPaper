
type = document.getElementById('type').children
console.log(type);

function myFunction(i){
  if (i = 1){
    type[1].classList.remove('show')
    type[1].classList.add('hidden')
    type[0].classList.remove('hidden')
    type[0].classList.add('show')
  } else if (i = 2) {
    type[0].classList.remove('show')
    type[0].classList.add('hidden')
    type[1].classList.remove('hidden')
    type[1].classList.add('show')

  }
}
