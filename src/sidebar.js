import { imagesA, setCurrent, stopShow, alternate} from "./index";

function showThumbnails() {
    const sidebar = document.getElementById("sidebar");
    imagesA.forEach((img) => {
      let thumbnail = document.createElement("img");
      thumbnail.src = img;
      thumbnail.classList.add("thumbnail");
      sidebar.appendChild(thumbnail);
    });
}

function clickThumbnails() {
  let thumbnails = Array.from(document.getElementsByClassName('thumbnail'))
  thumbnails.forEach((element) => {
    console.log(element)
    element.addEventListener('click', () => {
      stopShow()
      setCurrent(thumbnails.indexOf(element))
      alternate()
    })
  })
}


export { showThumbnails, clickThumbnails }