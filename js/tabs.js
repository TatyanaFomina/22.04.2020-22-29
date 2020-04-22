
const tabContainer = document.querySelector('div.tab');

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.className += " active";
}

tabContainer.addEventListener('click', function(e){
    const active = e.target.dataset.tabName;
    openTab(e.target, active);
    e.preventDefault();
})

