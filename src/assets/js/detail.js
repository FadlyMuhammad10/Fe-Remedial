const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(queryString);
const url = "https://64513164e1f6f1bb22aab5b3.mockapi.io/artikel/" + id;

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    document.getElementById("blog").innerHTML += `
    <div class="row justify-content-center">
      <div class="col-12 bg-dark d-flex justify-content-center">
        <div class="col-11">
          <div class="row justify-content-center align-items-center">
            <div class="col-7 col-lg-9 col-xl-9 col-xxl-8 text-white">
              <h5 class="pt-3">${value.kategori}</h5>
              <h1>${value.title}</h1>
              <div class="col d-flex">
                <p class="ps-1">oleh ${value.author} </p>
                <p class="ps-3"> ${value.date}</p>
              </div>
            </div>

            <div class="col-4 col-lg-3 col-xl-3 col-xxl-4 d-flex justify-content-end">
              <img class="img-fluid" src="${value.image}" alt="">
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-10 col-lg-11">
        <div class="row justify-content-center">
          <div class=" col-md-12 col-lg-9 col-xl-9 col-xxl-9">
            <p class="mt-4">${value.pengertian}</p>
            <p>${value.artikel}</p>
            <h5 class="fw-bold">${value.subbab1}</h5>
            <p>${value.artikel1}</p>
            <h5 class="fw-bold">${value.subbab2}</h5>
            <p>${value.artikel2}</p>
            <hr>    
          </div>

          <div class="col-12 col-lg-3 col-xl-3 col-xxl-3">
            <div class="p-3 justify-content-center">
              <h4 class="pt-3">Baca Artikel</h4>
            </div>
            <div class="col">
              <div class="fundamental">
                <div class="fundamental-item d-flex">
                    <img src="assets/img/fundamental/empat.jpg" class="fundamental-img" alt="">
                    <h3><a href="#!">${value.title}</a>
                    </h3>
                </div>
                <div class="col">
                    <div class="fundamental-item d-flex">
                        <img src="assets/img/fundamental/batik.jpg" class="fundamental-img"
                            alt="">
                        <h3><a href="#!">${value.title}</a></h3>
                    </div>
                </div>
                <div class="col">
                    <div class="fundamental-item d-flex">
                        <img src="assets/img/fundamental/patung.jpg" class="fundamental-img"
                            alt="">
                        <h3><a href="#!">${value.title}</a></h3>
                    </div>
                </div>
                <div class="col">
                    <div class="fundamental-item d-flex">
                        <img src="assets/img/fundamental/satu.jpg" class="fundamental-img"
                            alt="">
                        <h3><a href="#!">${value.title}</a></h3>
                    </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
      
        
    </div>`;
    console.log(value);
  });
