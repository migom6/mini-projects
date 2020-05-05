document.getElementById("submit").onclick = () => {
  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  const options = {
    method: "POST",
    mode: "cors",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch("http://localhost:3000/api/user/login", options)
    .then(res => {
      auth_token = res.headers.get("auth-token");
      localStorage.setItem("auth_token", auth_token);
      return res.json();
    })
    .then(res => {
      window.location = "http://localhost:8000/";
      console.log(res);
    })
    .catch(e => {
      window.location = "http://localhost:8000/login.html";
      console.log(e);
    });
};
