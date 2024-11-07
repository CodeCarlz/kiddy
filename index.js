function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const videoSrc = getQueryParam("video");
  const dynamicTitle = document.getElementById("dynamicTitle");
  if (videoSrc.includes("math")) {
    dynamicTitle.textContent = "Math Class";
  } else if (videoSrc.includes("drawing")) {
    dynamicTitle.textContent = "Drawing Class";
  }

  if (videoSrc) {
    let title = videoSrc.charAt(0).toUpperCase() + videoSrc.slice(1) + " Class"; // Capitalize first letter

    // Set the dynamic title to the h1 element

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
