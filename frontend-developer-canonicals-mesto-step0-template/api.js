const myHeaders = new Headers();
myHeaders.append("authorization", "d6d7ac20-9283-416f-91d5-4cb249c58817");

functionMe(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}







const myHeaders = new Headers();
myHeaders.append("authorization", "d6d7ac20-9283-416f-91d5-4cb249c58817");

functionCards(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}







const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "d6d7ac20-9283-416f-91d5-4cb249c58817");

const raw = JSON.stringify({
  "name": "Marcus Gamanzhi",
  "about": "Skater"
});

funcPatch(){
const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me?Content-Type=application/json", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}