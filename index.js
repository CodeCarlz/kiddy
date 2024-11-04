function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const videoSrc = getQueryParam("video");
  console.log("Video Source:", videoSrc); // Log the video source

  // Set the video source and load it
  if (videoSrc) {
    const videoElement = document.querySelector("video");
    const sourceElement = document.getElementById("videoSource");
    sourceElement.src = videoSrc;
    videoElement.load(); // Load the new video

    console.log("Video loaded:", sourceElement.src); // Log the loaded video source

    videoElement.play().catch((error) => {
      console.error("Error playing video:", error); // Log any playback error
    });
  } else {
    console.log("No video source found."); // Log if no video source is present
  }
});
