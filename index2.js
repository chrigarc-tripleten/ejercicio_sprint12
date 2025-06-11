const button = document.querySelector(".button");
const section = document.querySelector('.section');

button.addEventListener("click", () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      console.log(json);
      const users = json.results;
      users.forEach((user) => {
        console.log(user.email, user.picture.medium);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
