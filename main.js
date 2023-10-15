let flag = 1;
const road = document.querySelector(".road");
const imgCar = document.querySelector("img");
const carImg = document.querySelector(".car-img");
window.addEventListener("keyup", moveCar);
function moveCar(e) {
  if (e.keyCode == 32) {
    road.classList.toggle("road-animation");
    carImg.classList.toggle("car-animation");
  }
  if (e.keyCode == 13) {
    if (flag % 2) {
      carImg.setAttribute("src", "images/car.png");
    } else {
      carImg.setAttribute("src", "images/light.png");
    }
    flag++;
  }
}
