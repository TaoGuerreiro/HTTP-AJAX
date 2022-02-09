// console.log("Hello from src/index.js!");

// Let's resume some basics !Kitt Teacher vous invite à une réunion Zoom planifiée.

// Select one element in the DOM

// const title = document.querySelector('.title')


// Get value

// console.log(title.innerText);

// Get HTML
// console.log(title.innerHTML);

// insert HTML in the target

// title.innerHTML = "Test pour le batch 797"

// Insert Adjacent HTML

// title.insertAdjacentHTML("beforeend", " le batch 797")

// style

// title.style.backgroundColor = "#FFCC00"

// add class

// title.classList.add("coucou")
// title.classList.remove("coucou")

// input value

// const input = document.getElementById("email")

// console.log(input.value);
// input.value = "nouveau@mail.com"

// listener

// input.addEventListener("keyup", (event) => {
  // callback
  // console.log(object);
  // console.log(event)

// })

// Select many eements in the DOM

// const list = document.querySelectorAll('ul:nth-child(1) li')

// console.log(list);

// also forEach

// list.forEach((element) => {
//   console.log(element.innerText);
// })

// const result_list = document.querySelector("#results")

// const result_list = document.getElementById("results")        // afficher les resultat
// const form        = document.getElementById('search-form')    // form

// // console.log(form);
// const fetchMovies = (query) => {
//   const url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`
//   fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       const list = data['Search']
//       list.forEach((movie) => {
//         const movieTag = `<li class="list-inline-item">
//         <img src="${movie.Poster}" alt="">
//         <p>${movie.Title}</p>
//         </li>`

//         result_list.insertAdjacentHTML("beforeend", movieTag)
//       })
//     })
// }


// form.addEventListener('submit', (event) => {
//   // callback
//   event.preventDefault();
//   const query = document.getElementById("search-input").value   // input => "Harry potter"
//   result_list.innerHTML = ""
//   fetchMovies(query)

// })

const signUp = (event) => {
  event.preventDefault()

  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })

}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)
