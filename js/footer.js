const juliesArray = ["HTML", "CSS", "JavaScript"];

const buildSentence = (languagesArray) => {
  let intro = "This page was built using ";
  for (let i = 0; i < languagesArray.length; i++) {
    if (i === languagesArray.length - 1) {
      intro = intro + "and " + languagesArray[i] + ".";
    } else {
      intro = intro + languagesArray[i] + ", ";
    }
  }

  const changeFooterMessage = document.getElementById("footerMessage");
  changeFooterMessage.textContent = intro;
  return intro;
};

buildSentence(juliesArray);
