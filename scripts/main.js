let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/car.jpg") {
    myImage.setAttribute("src", "images/car1.jpg");
  } else {
    myImage.setAttribute("src", "images/car.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
   if (!myName) {
    setUserName();
  } else {
   localStorage.setItem("name", myName);
  myHeading.textContent = "Hello" + myName + ", welcome to my home page.";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}
