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

const GITHUB_URL = "https://api.github.com/users/";
const GITHUB_USERNAME = "Juliechajes";
const githubInfo = GITHUB_URL.concat(GITHUB_USERNAME);
console.log(githubInfo);

const URL = githubInfo;
fetch(URL).then((response) => {
  response.json().then((data) => {
    const nameReplacement = githubInfo;
    const GetNewName = document.getElementById("nameReplacement");
    GetNewName.textContent = data["name"];

    const photoReplace = githubInfo;
    const GetNewPhoto = document.getElementById("juliesPhoto");
    GetNewPhoto.textContent = juliesPhoto;
    juliesPhoto.src = data["avatar_url"];
  });
});
