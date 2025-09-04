const feedbackForm = document.getElementById("feedbackForm");
const feedbackResponseMessage = document.getElementById(
  "feedbackResponseMessage"
);

feedbackForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);

  const response = await fetch("send-feedback.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.text();

  if (result === "success") {
    feedbackResponseMessage.style.color = "green";
    feedbackResponseMessage.style.display = "block";

    feedbackForm.reset();
  } else {
    alert("Помилка! Спробуйте ще раз.");
  }
});
