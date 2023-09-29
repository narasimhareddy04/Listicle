const renderGuide = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/guides");
  const data = await response.json();
  const guideContent = document.getElementById("guide-content");
  let guide;
  guide = data.find((guide) => guide.id === requestedID);
  console.log(guide);
  if (guide) {
    document.getElementById("image").src = guide.image;
    document.getElementById("title").textContent = guide.title;
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + guide.submittedBy;
    document.getElementById("text").textContent = "Description: " + guide.text;
    document.getElementById("category").textContent =
      "Category: " + guide.category;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Guides Available 😞";
    guideContent.appendChild(message);
  }
};

renderGuide();
