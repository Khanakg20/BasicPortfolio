  var typed = new Typed(".text", {
    strings: ["AI/ML Engineer", "Data Scientist", "Gen AI Specialist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });



    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });



function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    addMessage("bot", generateResponse(message));
  }, 500);
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function addMessage(sender, text) {
  const chatBody = document.getElementById("chat-body");
  const msg = document.createElement("div");
  msg.className = `chatbot-message ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generateResponse(msg) {
  // Simple rule-based response
  if (msg.toLowerCase().includes("hello")) return "Hi! How can I assist you today?";
  if (msg.toLowerCase().includes("thank you")) return "You're very welcome!!";
  if (msg.toLowerCase().includes("contact")) return "You can contact me at khanak.gupta1911@gmail.com!";
  return "Thanks for your message! I'll get back to you soon.";
}

