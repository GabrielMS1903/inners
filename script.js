const title = document.getElementById("titulo")
console.log(title)

title.innerText = "Aqui você encontra a melhor forma de aprender!"

const href = document.getElementsByTagName("a")
console.log(href[0])

href[0].innerText = "Clica aqui!"

const notUl = document.getElementById("nao-ordenada")
console.log(notUl.innerHTML)

notUl.innerHTML = `<li>Maça</li>
<li>Maracujá</li>
<li>Limão</li>
`

const yeahOl = document.getElementById("lista-ordenada")
console.log(yeahOl.innerHTML)

yeahOl.innerHTML = `
<li><a href="https://www.youtube.com/">Youtube</a></li>
<li><a href="https://color.adobe.com/pt/create/image-gradient">Adobe Color</a></li>
<li><a href="https://www.instagram.com/">Instagram</a></li>
`