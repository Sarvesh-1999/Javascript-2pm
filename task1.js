const signupFormEL = document.getElementById("signup-form");

signupFormEL.addEventListener("submit", (e) => {
  e.preventDefault();

  //! target input tags
  const usernameEl = document.querySelector("#username");
  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  //! create new user object
  let newUser = {
    username: usernameEl.value.trim(),
    email: emailEl.value.trim(),
    password: passwordEl.value.trim(),
  };

  console.log(newUser);

  //! GET USERS DATA FROM LOCAL STORAGE , IF NOT PRESENT THEN STORE [] EMPTY ARRAY
  const allSignupUsers = JSON.parse(localStorage.getItem("users")) || [];

  console.log(allSignupUsers); // [{}]

  //! PUSH NEW USER IN ARRAY
  allSignupUsers.push(newUser);

  console.log(allSignupUsers); // [{},{}]

  //! SET USERS ARRAY IN LOCAL STORAGE
  localStorage.setItem("users", JSON.stringify(allSignupUsers));

  //! CLEAR INPUT FIELDS
  usernameEl.value = "";
  passwordEl.value = "";
  emailEl.value = "";

  displaySignupUsers();
});

window.addEventListener("DOMContentLoaded", () => {
  displaySignupUsers();
});

function displaySignupUsers() {
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  if (allUsers.length === 0) {
    const pTag = document.createElement("p");
    pTag.textContent = "No Users Available";
    document.body.append(pTag);
  } else {
    allUsers.map((ele) => {
      const divTag = document.createElement("div");
      divTag.innerHTML = `
        <h2>Username : ${ele.username}</h2>
        <h2>Email : ${ele.email}</h2>
        `;
      document.body.append(divTag);
    });
  }
}
