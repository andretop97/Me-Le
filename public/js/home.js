window.addEventListener('load', () => {
  console.log('teste - onload')
  axios.post('http://localhost:3000/user/getUserById',
    {
      id: sessionStorage.getItem('idUser')
    }).then((response) => {
      
      let books = response.data.books;
      let container = document.getElementById('container');
      console.log(books)
      for (let i =0; i < books.length; i++) {
        container.innerHTML = 
        `<div class="card" style="width: 15rem; height: 7rem">
          <img src="${books[i].image}" width="150px" height="150px" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${books[i].title}</h5>
            <p class="card-text">${books[i].description}</p>
            <a class="btn btn-primary" onclick="teste('${books[i]._id}')">Acessar Quiz's</a>
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