const urlUserRegister = 'https://64506f04a3221969114a69f9.mockapi.io/user'
function register() {
  const user = {
    nama: document.getElementById('nameRegister').value,
    email: document.getElementById('emailRegister').value,
    password: document.getElementById('passwordRegister').value,
    password2: document.getElementById('passwordRegister2').value,
    asalsekolah: document.getElementById('asalSekolahRegister').value,
    alasan: document.getElementById('alasanRegister').value,
    alamat: document.getElementById('alamatRegister').value
  }

  console.log(user)
  fetch(urlUserRegister, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user)
  }).then(response => response.json())
    .then(value => {
      console.log('masuk')
      console.log(value)
    })
}