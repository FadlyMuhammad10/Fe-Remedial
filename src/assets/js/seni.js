const url = 'https://64506f04a3221969114a69f9.mockapi.io/seni'

fetch(url, {
  method: 'GET'
}).then(response => response.json())
  .then(value => {
    for (let i = 0; i < value.length; i++) {
      document.getElementById('seni').innerHTML += `  <div class="referensi mt-3">
      <div class="col">
          <div class="referensi-item d-flex align-items-center">
              <img src="${value[i].image}" class="referensi-img" alt="">
              <div class="row px-3">
                  <h3><a href="#!">${value[i].title}</a></h3>
                  <p>oleh ${value[i].author} | 09-09-2019</p>
              </div>
          </div>
      </div>
     
  </div>`
    }
    console.log(value)
  })
