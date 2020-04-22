"use strict";

const text = document.querySelector("textarea");
const recentComments = document.querySelector("#recentComments");
const allComments = document.querySelector("#allComments");
const sendRequest = document.getElementById("send-request");
const quantity = document.querySelector("#quantityComments");



function handler() {
  if (text.value === "") {
    alert("Вы забыли ввести комментарий");
  } else {
    const div = document.createElement("div");
    div.className = "card card-comment";
    const divTop = document.createElement("div");
    divTop.className = "card-top";
    const divBottom = document.createElement("div");
    divBottom.className = "card-bottom";
    const userName = document.createElement("p");
    userName.className = "user-name";
    userName.innerHTML = setUserName();
    const date = document.createElement("p");
    date.className = "date";
    date.innerHTML = nowDate(new Date());
    const innerText = document.createElement("p");
    innerText.className = "text comment-border";
    innerText.innerHTML = text.value;
    recentComments.append(div);
    div.append(divTop, divBottom);
    divTop.append(userName, date);
    divBottom.append(innerText);
    const div2 = div.cloneNode(true);
    allComments.append(div2);
    text.value = "";
    commentsCollection.push({
      name: userName.innerHTML,
      date: date.innerHTML,
      text: innerText.innerHTML,
    });
    quantity.innerHTML = commentsCollection.length;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.keyCode == 0xa || event.keyCode == 0xd)) {
    handler();
    event.preventDefault();
  }
});

sendRequest.addEventListener("click", (event) => {
  handler();
  event.preventDefault();
});

function nowDate(date) {
  const arr = date.toString().split(" ");
  let month = "";
  switch (arr[1]) {
    case "Dec":
      month = "Декабря";
      break;
    case "Jan":
      month = "Января";
      break;
    case "Feb":
      month = "Февраля";
      break;
    case "Mar":
      month = "Марта";
      break;
    case "Apr":
      month = "Апреля";
      break;
    case "May":
      month = "Мая";
      break;
    case "Jun":
      month = "Июня";
      break;
    case "Jul":
      month = "Июля";
      break;
    case "Aug":
      month = "Августа";
      break;
    case "Sep":
      month = "Сентября";
      break;
    case "Oct":
      month = "Октября";
      break;
    case "Nov":
      month = "Ноября";
      break;
    default:
      month = "";
  }

  return arr[2] + " " + month.toLowerCase() + " " + arr[3];
}

function setUserName(){
  let name = prompt("Вы не авторизированный пользователь, введите своё имя","") || 'Anonymus';
  return name;
};









