const urlUserLogin = "https://64506f04a3221969114a69f9.mockapi.io/user";

function login() {
  const userLogin = {
    email: document.getElementById("emailLogin").value,
    password: document.getElementById("passwordLogin").value,
  };
  console.log(userLogin);
  let found = false;
  fetch(urlUserLogin, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((value) => {
      for (let i = 0; i < value.length; i++) {
        if (
          value[i].email === userLogin.email &&
          value[i].password === userLogin.password
        ) {
          found = true;
          break;
        }
      }
      if (found === true) {
        console.log("User ditemukan");
        window.location.replace("index.html");
      } else {
        console.log("User tidak ditemukan");
      }
    });
}
