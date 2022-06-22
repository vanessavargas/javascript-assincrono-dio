const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const getDogs = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.url;
  } catch (e) {
    console.log(e.message);
  }
};

const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  img.src = await getDogs();
};

loadImg();

const btn = document.getElementById("change-dog");
btn.addEventListener("click", loadImg);
