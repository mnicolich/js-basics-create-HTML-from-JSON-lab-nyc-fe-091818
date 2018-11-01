document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.querySelector('#Titanic')
  const terminatorButton = document.querySelector('#Terminator-2')
  
  titanicButton.addEventListener('click', fillInMovieData)

});

function fillInMovieData() {
  const title = movies['Titanic'].title
  const titleDei = document.querySelector('#title')
  titleDiv.innerText = title

  const director = movies['Titanic'].director
   const directorDeiv = document.querySelector('#director')
 directorDiv.innerText = director
 
 const director = movies['Titanic'].director
   const directorDeiv = document.querySelector('#director')
 directorDiv.innerText = director
 
 
}