function receiveMessage() {
  const input = document.getElementById("userMessage");
  const messages = document.getElementById("messages");
  const msg = input.value.trim();
  if (msg) {
    const newMsg = document.createElement("div");
    newMsg.textContent = `Received: ${msg}`;
    messages.appendChild(newMsg);
    input.value = "";
  }
}
