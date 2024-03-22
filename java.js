
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const cellphone = document.querySelector(".cellphone");
const pak = document.querySelector(".pak");
const head1 = document.querySelector(".head1");
const item1 = document.querySelector(".item1");

item2.addEventListener("click", () => {
    window.scrollBy(0, pak.offsetTop);
  });
  item3.addEventListener("click", () => {
    window.scrollBy(0, cellphone.offsetTop);
  });
  item1.addEventListener("click", ()=> {
        window.scrollBy(0,head1.offsetTop);
  });
  function displayText() {
    alert("0910 425 4793");
}

function changeColor() {
    var body = document.querySelector("body");
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

const scrollButton = document.getElementById('scrollBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}