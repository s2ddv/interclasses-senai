const apiUrl = "http://localhost:8000/api/";
async function criarProduto(event) {
  event.preventDefault();

  const nome_completo = document.getElementById("nome").value;
  const dataInput = document.getElementById("nascimento").value;
  const turma = document.getElementById("turma").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const data_nascimento = dataInput;

  const data = {
    nome_completo: nome_completo,
    data_nascimento: data_nascimento,
    turma: turma,
    email: email,
    senha: senha,
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
  document.getElementById("submit-btn").addEventListener("click", criarProduto);
});

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
  if(password.type == "password"){
    password.type = "text";
    eyeicon.src = "/frontend/src/assets/img/icons8-eye-50.png";
  }else {
    password = "password";
    eyeicon.src = "/frontend/src/assets/img/icons8-closed-eye-50.png";
  }
}