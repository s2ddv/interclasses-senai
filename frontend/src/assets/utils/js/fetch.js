const apiUrl = "http://localhost:8000/api/";
async function criarUsuarios(event) {
  event.preventDefault();

  const nome_completo = document.getElementById("nome").value;
  const dataInput = document.getElementById("nascimento").value;
  const turma = document.getElementById("turma").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const modalidadeId = document.getElementById("nome").value;

  const data_nascimento = dataInput;

  const data = {
    nome_completo: nome_completo,
    data_nascimento: new Date(dataInput).toISOString().split("T")[0],
    turma: turma,
    email: email,
    senha: senha,
    modalidade: parseInt(modalidadeId),
  };

  try {
    const response = await fetch(apiUrl + "usuarios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar usuário: " + response.status);
    }

    const usuarioCriado = await response.json();
    console.log("Usuário criado com sucesso:", usuarioCriado);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    alert("Erro: " + error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("submit-btn")
    .addEventListener("click", criarUsuarios);
});

async function getmodalidades() {
  try {
    const response = await fetch(apiUrl + "modalidades/");
    const modalidades = await response.json();

    const select = document.getElementById("nome_modalidade");
    select.innerHTML = '<option value="">Selecione uma modalidade</option>';

    modalidades.forEach((modalidade) => {
      const option = document.createElement("option");
      option.value = modalidade.id;
      option.textContent = modalidade.nome;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Erro ao carregar modalidades:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getmodalidades();
});
