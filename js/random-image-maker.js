const bannerImgList = ['https://t.ly/6p867', 'https://t.ly/wMkRS', 'https://cutt.ly/UwBDWEYk', 'https://cutt.ly/uwBDT41Y', 'https://cutt.ly/ewBDYCz8'];

const imgListLength = bannerImgList.length;

document.addEventListener("DOMContentLoaded", function () {
  // Your function call goes here
  getRandomImg();
});
setInterval(getRandomImg, 5000);


function getRandomImg() {
  const randomNumber = Math.round(Math.random() * (imgListLength-1));
  document.getElementById('header-banner-img').src = bannerImgList[randomNumber];
}
