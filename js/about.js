const mapsArray = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126418.61427186322!2d-35.008847013228944!3d-8.041988412520254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%20-%20State%20of%20Pernambuco%2C%20Brazil!5e0!3m2!1sen!2sil!4v1615284579415!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9913.482593567625!2d-0.1173250088604655!3d51.59809692280308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761be26aa77cdd%3A0x2ad321cd28893700!2sWood%20Green%2C%20London%2C%20UK!5e0!3m2!1sen!2sil!4v1615284806490!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743553.8052807364!2d33.95796425083835!3d31.40369549403585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500492432a7c98b%3A0x6a6b422013352cba!2sIsrael!5e0!3m2!1sen!2sil!4v1615285346228!5m2!1sen!2sil",
];

let i = 0;
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const rotatingMap = document.getElementById("rotatingMap");

const changePrevMap = () => {
  if (i > 0) {
    i--;
    rotatingMap.src = mapsArray[i];
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
  } else {
    prevButton.classList.add("disabled");
  }
  disbleButtons();
};

const changeNextMap = () => {
  if (i < mapsArray.length - 1) {
    i++;
    rotatingMap.src = mapsArray[i];
    prevButton.classList.remove("disabled");
  } else {
    nextButton.classList.add("disabled");
  }
  disbleButtons();
};

const disbleButtons = () => {
  if (i === 0) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  }
  if (i === 1) {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
  if (i === 2) {
    prevButton.disabled = false;
    nextButton.disabled = true;
  }
};

prevButton.addEventListener("click", changePrevMap);
nextButton.addEventListener("click", changeNextMap);

rotatingMap.src = mapsArray[i];
