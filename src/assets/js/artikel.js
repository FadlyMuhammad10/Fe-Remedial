const url = "https://64513164e1f6f1bb22aab5b3.mockapi.io/artikel";

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    for (let i = 0; i < value.length; i++) {
      document.getElementById("blog-list").innerHTML += `<a href="${"detail_artikel.html?id=" + value[i].id}"><div class="card mb-3 text-black">
      <div class="row g-0">
        <div class="col-12 col-md-9">
          <div class="card-body">
            <div class="entry-meta d-flex align-items-center">
              <p class="category me-4">${value[i].kategori}</p>
              <p>${value[i].author}</p>
            </div>
            <h5 class="card-title">${value[i].title}</h5>
            <p class="card-text">${value[i].pengertian}</p>
            <p class="card-text"><small class="text-body-secondary">${value[i].date}</small></p>
          </div>
        </div>
        <div class="col-12 col-md-3 d-flex justify-content-center">
          <img src="${value[i].image}" class="img-fluid rounded-start" alt="..."
            style="width: 100%; padding: 0.5em; border-radius: 15px;">
        </div>
      </div>
    </div></a>`;
    }
    console.log(value);
  });
