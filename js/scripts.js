function showMessage() {
  const btn = document.getElementById("button_message");

  if (!document.getElementById("created_msg")) {
    const paragraph = document.createElement("p");
    paragraph.id = "created_msg";
    paragraph.textContent = "olá!!";

    btn.insertAdjacentElement("afterend", paragraph);
  }
}

document
  .getElementById("button_message")
  .addEventListener("click", showMessage);
