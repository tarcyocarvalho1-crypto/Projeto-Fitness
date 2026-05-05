const supabaseUrl = 'https://ollmeqxtoxjdzbfmwqwo.supabase.co'
const supabaseKey = 'sb_publishable_JgQRyxzzVsKErheY60mlEw_DojU84xs'
const db = supabase = createClient(supabaseUrl, supabaseKey)

const handleCadastro = async (dadosDoFormulario) => {
  const { data, error } = await db
    .from('perfis_usuarios') // Nome da tabela que criamos
    .insert([
      { 
        nome_completo: dadosDoFormulario.nome,
        email: dadosDoFormulario.email,
        senha: dadosDoFormulario.senha,
        data_nascimento: dadosDoFormulario.dataNascimento,
        telefone: dadosDoFormulario.contato,
        cpf: dadosDoFormulario.cpf,
        peso: dadosDoFormulario.peso,
        altura: dadosDoFormulario.altura
      },
    ])

  if (error) {
    console.error('Erro ao cadastrar:', error.message)
    alert('Erro ao realizar cadastro!')
  } else {
    console.log('Usuário cadastrado com sucesso:', data)
    alert('Cadastro realizado!')
  }
}



// Espera o clique no botão
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();// Impede a página de recarregar

 // Dentro da sua função de cadastro, onde você pega os valores:
const nome = document.querySelector('input[name="Nome"]').value;
const email = document.querySelector('input[name="email"]').value;
const senha = document.querySelector('input[name="Senha"]').value;
const dataNascimento = document.querySelector('input[name="Data"]').value;
const cpf = document.querySelector('input[name="CPF"]').value;
const contato = document.querySelector('input[name="Contato"]').value;
const peso = document.querySelector('input[name="Peso"]').value;
const altura = document.querySelector('input[name="Altura"]').value;

console.log("Dados capturados:", { nome_completo, email, senha, data_nascimento, cpf, contato, peso, altura});

// Agora passa TODOS os campos para a função de cadastro
handleCadastro({nome, email, senha, dataNascimento, cpf, contato, peso, altura});

// Agora você pode usar essas variáveis para enviar ao Supabase
console.log("Dados capturados:", { nome, email, senha, dataNascimento, cpf });
});


