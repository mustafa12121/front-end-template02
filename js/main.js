// standing the links minue in the header on clicking
let icon = document.querySelector("span.icon");
let list = document.querySelector("span.icon + ul");
document.addEventListener("click", function (e) {
  if (e.target == icon && window.innerWidth < 768) {
    list.style.display = "block";
  } else if (window.innerWidth < 768) {
    list.style.display = "none";
  }
});
let curent;
let dotList = document.querySelectorAll(".landing ul li");
let arrow = document.querySelectorAll(".background-chang");
// moving the blue dot in the landing section
document.addEventListener("click", function (e) {
  curent = document.querySelector(".landing .active");
  if (e.target == arrow[0]) {
    if (curent == dotList[1] || curent == dotList[2]) {
      removeact();
      dotList[1].className = "";
      curent.previousElementSibling.className = "active";
    }
  } else if (e.target == arrow[1]) {
    if (curent == dotList[0] || curent == dotList[1]) {
      removeact();
      dotList[1].className = "";
      curent.nextElementSibling.className = "active";
    }
  }
  for (let i = 0; i < dotList.length; i++) {
    if (e.target == dotList[i]) {
      removeact();
      dotList[i].className = "active";
    }
  }
});
// removing the class active from all the li
function removeact() {
  for (let i = 0; i < dotList.length; i++) {
    if (dotList[i].className === "active") {
      dotList[i].className = "";
    }
  }
}

// moving the photos catagore
let photoCatagory = document.querySelectorAll(".protfolio ul li");
document.addEventListener("click", function (e) {
  for (let i = 0; i < photoCatagory.length; i++) {
    if (e.target == photoCatagory[i]) {
      for (let i = 0; i < photoCatagory.length; i++) {
        if (photoCatagory[i].className === "active") {
          photoCatagory[i].className = "";
        }
      }
      photoCatagory[i].className = "active";
    }
  }
});

let calcs = document.querySelector(".calcs");

let fat = document.querySelectorAll(".calcs .fet h3");
calcs.onclick = function () {
  for (let i = 0; i < fat.length; i++) {
    fat[i].innerHTML = Math.trunc((fat[i].innerHTML /= 2));
  }
  contup(fat[0], 1236, 1);
  contup(fat[1], 256, 10);
  contup(fat[2], 1743, 1);
  contup(fat[3], 17, 50);
};

function contup(element, number = 0, speed = 500) {
  let cont = setInterval(
    () => {
      if (element.innerHTML >= number - 1) {
        clearInterval(cont);
      }
      element.innerHTML++;
    },
    speed,
    number
  );
}

//skells
let empty = document.querySelectorAll(".skiles ul li:empty");
document.querySelector(".skiles").onclick = function () {
  for (let i = 0; i < empty.length; i++) {
    let stoped = parseInt(empty[i].getAttribute("name"));
    sliding(empty[i], stoped);
  }

  function sliding(elem, valueToStop) {
    elem.setAttribute("name", "0%");
    let conter = 0;
    let handler = setInterval(
      () => {
        if (conter == valueToStop) {
          clearInterval(handler);
        }
        elem.setAttribute("name", `${conter++}%`);
        elem.style.backgroundImage = `linear-gradient(to right, var(--main-color) ${conter}%, #dedadc ${conter}%)`;
      },
      50,
      valueToStop
    );
  }
};
