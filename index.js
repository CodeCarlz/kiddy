function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const videoSrc = getQueryParam("video");



  if (videoSrc) {
    const videoElement = document.querySelector("video");
    const sourceElement = document.getElementById("videoSource");
    sourceElement.src = videoSrc;
    videoElement.load(); 



    videoElement.play().catch((error) => {
      console.error("Error playing video:", error);
    });
  } else {
    console.log("No video source found."); 
  }
});
