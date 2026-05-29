const SUPABASE_URL = "https://srfzlkzhmkyiaqnyohpv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_X1Z63IiOWK_qeKNxRHOUxw_ptwVCgI8";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const formulario = document.querySelector('#meuFormulario');

if (!formulario) {
    console.error('Formulário (#meuFormulario) não encontrado.');
} else {
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dadosForm = new FormData(formulario);

    const dadosParaEnviar = {
        nome: dadosForm.get('nome'),
        email: dadosForm.get('email'),
        senha: dadosForm.get('senha'),
        data: dadosForm.get('data'),
        contato: dadosForm.get('contato'),
        cpf: dadosForm.get('cpf'),
        peso: dadosForm.get('peso') ? Number(dadosForm.get('peso')) : null,
        altura: dadosForm.get('altura') ? Number(dadosForm.get('altura')) : null
    };

    try {
        const { data, error } = await supabaseClient
            .from('usuarios')
            .insert([dadosParaEnviar]);

        if (error) throw error;

        alert('Cadastro realizado com sucesso, meu patrão!');
        formulario.reset();
    } catch (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao salvar: ' + (error?.message || error));
    }
});
}





