// Supabase client criado no formulario.html e salvo em window.supabase
const supabase = window.supabase;


const formulario = document.querySelector('#meuFormulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); // Não deixa a página recarregar

    // Cria um objeto com todos os dados do formulário automaticamente
    const dadosForm = new FormData(formulario);
    
    // Organiza os dados para o formato que o banco de dados entende
    const dadosParaEnviar = {
        nome: dadosForm.get('Nome'),
        email: dadosForm.get('email'),
        senha: dadosForm.get('Senha'),
        data: dadosForm.get('Data'),
       contato: dadosForm.get('Contato'),
        cpf: dadosForm.get('CPF'),
        peso: Number(dadosForm.get('Peso')),
        altura: Number(dadosForm.get('Altura'))
    };

    // Envia para a sua tabela no banco de dados
    const { data, error } = await supabase
        .from('Usuarios')
        .insert([dadosParaEnviar]);

    if (error) {
        console.error('Erro ao cadastrar:', error.message);
        alert('Ocorreu um erro no cadastro!');
    } else {
        alert('Cadastro realizado com sucesso, patrão!');
        formulario.reset();
    }
});