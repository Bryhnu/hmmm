// os botoes
const navBotao1 = document.getElementById('botao1')
const navBotao2 = document.getElementById('botao2')
const navBotao3 = document.getElementById('botao3')
const navBotao4 = document.getElementById('botao4')
const navBotao5 = document.getElementById('botao5')
const btnhome = document.getElementById('botaoHome')


//  as divs
const div1 = document.getElementById("n1")
const div2 = document.getElementById("n2")
const div3 = document.getElementById("n3")
const div4 = document.getElementById("n4")
const div5 = document.getElementById("n5")




navBotao1.addEventListener("click", function () {

  div1.style.display = 'block'

  div2.style.display = 'none'
  div3.style.display = 'none'
  div4.style.display = 'none'
  div5.style.display = 'none'
  
})

navBotao2.addEventListener("click", function () {

  div2.style.display = 'block'

  div1.style.display = 'none'
  div3.style.display = 'none'
  div4.style.display = 'none'
  div5.style.display = 'none'
  
})

navBotao3.addEventListener("click", function () {

  div3.style.display = 'block'

  div2.style.display = 'none'
  div1.style.display = 'none'
  div4.style.display = 'none'
  div5.style.display = 'none'
 
})

navBotao4.addEventListener("click", function () {

  div4.style.display = 'block'

  div2.style.display = 'none'
  div3.style.display = 'none'
  div1.style.display = 'none'
  div5.style.display = 'none'
 
})

navBotao5.addEventListener("click", function () {

  div5.style.display = 'block'

  div2.style.display = 'none'
  div3.style.display = 'none'
  div4.style.display = 'none'
  div1.style.display = 'none'
 
})

