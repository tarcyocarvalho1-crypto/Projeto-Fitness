// 1. Conexão com o seu Supabase (as mesmas credenciais que deram certo no cadastro)
const SUPABASE_URL = "https://srfzlkzhmkyiaqnyohpv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_X1Z63IiOWK_qeKNxRHOUxw_ptwVCgI8";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. Mapeia o formulário do seu HTML de login
// (Confira se no seu login.html a tag <form> está com id="meuFormularioLogin")
const formularioLogin = document.querySelector('#meuFormularioLogin');

formularioLogin.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede a página de recarregar e sumir com os dados

    const dadosForm = new FormData(formularioLogin);
    const emailDigitado = dadosForm.get('email');
    const senhaDigitada = dadosForm.get('senha');

    try {
        // 3. Busca na tabela 'usuarios' se existe esse e-mail e senha
        const { data, error } = await supabaseClient
            .from('usuarios') // Sua tabela que funcionou!
            .select('*')     // O asterisco '*' puxa TODAS as colunas (nome, peso, altura...)
            .eq('email', emailDigitado)
            .eq('senha', senhaDigitada);

        if (error) throw error;

        // 4. Se o Supabase encontrar o usuário, a lista 'data' terá tamanho maior que 0
        if (data.length > 0) {
            // O usuário encontrado fica na primeira posição da lista: data[0]
            const usuarioLogado = data[0]; 

            // Mensagem de sucesso puxando o NOME direto do banco de dados!
            alert(`Login realizado com sucesso, meu patrão ${usuarioLogado.nome}!`);
            
            // Exemplo: Mostra no console do navegador todos os dados que vieram do formulário
            console.log("Informações do formulário deste usuário:", usuarioLogado);
            console.log("Peso cadastrado:", usuarioLogado.peso);
            console.log("Altura cadastrada:", usuarioLogado.altura);

            // 5. Redireciona o usuário para a página principal do seu app
            window.location.href = 'index.html'; 

        } else {
            // Se a lista vier vazia, é porque errou o e-mail ou a senha
            alert('E-mail ou senha incorretos! Dá uma verificada aí, meu patrão.');
        }

    } catch (error) {
        console.error('Erro no sistema de login:', error.message);
        alert('Erro ao tentar conectar: ' + error.message);
    }
});