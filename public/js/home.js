window.addEventListener('load', () => {
  console.log('teste - onload')
  axios.post('http://localhost:3000/user/getUserById',
    {
      id: sessionStorage.getItem('idUser')
    }).then((response) => {
      
      let books = response.data.books;
      let container = document.getElementById('cont');
      console.log(books)
      for (let i =0; i < books.length; i++) {
        container.innerHTML += 
        `<div class="col-sm-3">
          <div class="card my-5">
            <img class="card-img-top"  src="${books[i].image}" alt="...">
            <div class="card-body">
              <h5 class="card-title">${books[i].title}</h5>
              <p class="card-text text-justify">${books[i].description}</p>
              <a class="btn btn-primary" onclick="teste('${books[i]._id}')">Acessar Quiz's</a>
            </div>
          </div>
        </div>`
      }

    }).catch((error) => {
      console.log(error.response);
    });
}) 

function teste(id) {
  sessionStorage.setItem('idBook', id);
  window.location.href = 'http://localhost:3000/quizes'
}

function logout() {
  sessionStorage.clear();
  window.location.href = 'http://localhost:3000/login'
}