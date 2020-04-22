function renderAllComments() {
  let array = [];
  for (let i = 0; i < commentsCollection.length; i++) {
    const div3 = document.createElement("div");
    div3.className = "card card-comment";
    const divTop3 = document.createElement("div");
    divTop3.className = "card-top";
    const divBottom3 = document.createElement("div");
    divBottom3.className = "card-bottom";
    const userName3 = document.createElement("p");
    userName3.className = "user-name";
    userName3.innerHTML = commentsCollection[i].name;
    const date3 = document.createElement("p");
    date3.className = "date";
    date3.innerHTML = commentsCollection[i].date;
    const innerText3 = document.createElement("p");
    innerText3.className = "text comment-border";
    innerText3.innerHTML = commentsCollection[i].text;
    div3.append(divTop3, divBottom3);
    divTop3.append(userName3, date3);
    divBottom3.append(innerText3);
    array.push(div3);
  }
  return array;
}

function renderRecentComments() {
  let array = [];
  const recentCommentsCollection = getRecentCommentsCollection();
  for (let i = 0; i < recentCommentsCollection.length; i++) {
    const div3 = document.createElement("div");
    div3.className = "card card-comment";
    const divTop3 = document.createElement("div");
    divTop3.className = "card-top";
    const divBottom3 = document.createElement("div");
    divBottom3.className = "card-bottom";
    const userName3 = document.createElement("p");
    userName3.className = "user-name";
    userName3.innerHTML = recentCommentsCollection[i].name;
    const date3 = document.createElement("p");
    date3.className = "date";
    date3.innerHTML = recentCommentsCollection[i].date;
    const innerText3 = document.createElement("p");
    innerText3.className = "text comment-border";
    innerText3.innerHTML = recentCommentsCollection[i].text;
    div3.append(divTop3, divBottom3);
    divTop3.append(userName3, date3);
    divBottom3.append(innerText3);
    array.push(div3);
  }
  return array;
}

document.addEventListener("DOMContentLoaded", (event) => {
  allComments.append(...renderAllComments());
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", (event) => {
  recentComments.append(...renderRecentComments());
  event.preventDefault();
});

