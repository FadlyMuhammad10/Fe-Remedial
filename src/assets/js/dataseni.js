const urlPost = 'https://64506f04a3221969114a69f9.mockapi.io/seni/'

const body = [{
    title: "Sifat Dasar Seni dan Struktur Seni ",
    image: "https://serupa.id/wp-content/uploads/2019/10/sifat-dasar-seni.jpg",
    author:"GAMAL THABRONI",
},
{
    title: "Seni Rupa Tradisional – Pengertian, Ciri, Sejarah & Contoh",
    image: "https://serupa.id/wp-content/uploads/2018/09/seni-rupa-tradisional-indonesia.jpg",
    author:"GAMAL THABRONI",
},
{
    title: "Memahami 9 Unsur Seni Rupa serta Prinsip dan Fungsinya",
    image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/07/05141350/image001-10.jpg",
    author:"Ananda",
}]

for(let i=1;i<=body.length;i++){
    const urlId = urlPost+i;
    console.log(urlId);
    fetch(urlId, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body[i-1])
    }).then(response => response.json())
        .then(value => {
        console.log(value)
        })
}
