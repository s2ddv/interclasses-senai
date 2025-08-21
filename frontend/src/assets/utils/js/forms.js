function togglePassword() {
  const input = document.getElementById("senha");
  input.type = input.type === "password" ? "text" : "password";
}

const form = document.getElementById("form-inscricao");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  console.log("Payload de inscrição:", data);

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);

  form.reset();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") document.body.classList.add("outline");
});

async function criarUsuario() {
  Event.preventDefault();

  const nome = document.getElementById("nome").value;
}
