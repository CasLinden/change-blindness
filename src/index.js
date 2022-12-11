import './styles/main.scss'

import img1A from "./assets/1A.png";
import img1B from "./assets/1B.png";
import img2A from "./assets/2A.png";
import img2B from "./assets/2B.png";
import img3A from "./assets/3A.png";
import img3B from "./assets/3B.png";
import img4A from "./assets/4A.png";
import img4B from "./assets/4B.png";
import img5A from "./assets/5A.png";
import img5B from "./assets/5B.png";
import img6A from "./assets/6A.png";
import img6B from "./assets/6B.png";
import img7A from "./assets/7A.png";
import img7B from "./assets/7B.png";



import {clickThumbnails, showThumbnails} from "./sidebar"

const img = document.querySelector('img')

const imagesA = [img1A, img2A, img3A, img4A, img5A, img6A, img7A]
const imagesB = [img1B, img2B, img3B, img4B, img5B, img6B, img7B];

let currentA
let currentB

let maskDuration = 0
let pictureDuration = 2000

function setCurrent(index) {
  currentA = imagesA[index]
  currentB = imagesB[index]
  img.src = currentA
}
setCurrent(0);

function swap() {
  let src = img.src
  mask()
  if (src === currentA) {
     setTimeout(() => img.src = currentB, maskDuration)
  } else if (src === currentB) {
     setTimeout(()=> img.src = currentA, maskDuration)
  }
}

function alternate() {
  setInterval(swap, pictureDuration)
}
alternate()

function mask() {
  img.src = ""
}

showThumbnails()
clickThumbnails()

export { imagesA, setCurrent }



