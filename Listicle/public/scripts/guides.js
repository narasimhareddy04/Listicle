const renderGuides = async () => {
  const response = await fetch("/guides");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  const mainContent = document.getElementById("main-content");
  if (data) {
    data.map((guide) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");

      topContainer.classList.add("top-container");
      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");
      topContainer.style.backgroundImage = `url(${guide.image})`;

      const title = document.createElement("h3");
      title.textContent = guide.title;
      bottomContainer.appendChild(title);

      const text = document.createElement("p");
      text.textContent = "Description: " + guide.text;
      bottomContainer.appendChild(text);

      const category = document.createElement("p");
      category.textContent = "Category: " + guide.category;
      bottomContainer.appendChild(category);

      const submittedBy = document.createElement("p");
      submittedBy.textContent = "Submitted By: " + guide.submittedBy;
      bottomContainer.appendChild(submittedBy);

      const link = document.createElement("a");
      link.textContent = "Info >";
      link.setAttribute("role", "button");
      link.href = `/guides/${guide.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Guides Available 😞";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderGuides();
}
