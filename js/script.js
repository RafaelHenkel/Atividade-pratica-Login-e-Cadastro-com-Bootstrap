const createAccount = async (event) => {
  event.preventDefault();
  try {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const data = {
      name,
      mail,
      pass,
    };

    localStorage.setItem("register", JSON.stringify(data));

    const dataSave = JSON.parse(localStorage.getItem("register"));

    const response = await api.post("signup", dataSave);

    console.log("conta criada", response.data);

    localStorage.removeItem("register");

    window.location.href = "../html/login.html";
  } catch (error) {
    const alert = document.getElementById("my-alert");

    alert.innerHTML = `<div class="alert alert-danger" role="alert">
    Invalid credentials!
  </div>`;
  }
};

const login = async (event) => {
  event.preventDefault();
  try {
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const data = {
      mail,
      pass,
    };

    localStorage.setItem("login", JSON.stringify(data));

    const dataSave = JSON.parse(localStorage.getItem("login"));

    const response = await api.post("login", dataSave);

    console.log("login realizado", response.data);

    localStorage.removeItem("login");
  } catch (error) {
    console.log(error);
  }
};
