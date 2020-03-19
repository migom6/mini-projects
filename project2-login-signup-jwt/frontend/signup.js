document.getElementById("submit").onclick = () => {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch("http://localhost:3000/api/user/register", options)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      window.location = "http://localhost:8000/login.html";
    })
    .catch(e => {
      console.log(e);
      window.location = "http://localhost:8000/login.html";
    });
};
