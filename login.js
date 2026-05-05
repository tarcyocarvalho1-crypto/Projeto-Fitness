const supabaseUrl = 'https://ollmeqxtoxjdzbfmwqwo.supabase.co'
const supabaseKey = 'sb_publishable_JgQRyxzzVsKErheY60mlEw_DojU84xs'
const db = supabase.createClient(supabaseUrl, supabaseKey)

// ... aqui começa o seu handleLogin que você já escreveu


const handleLogin = async (emailDigitado, senhaDigitada) => {
  // Procuramos na tabela se existe alguém com esse email E essa senha
  const { data, error } = await db
    .from('perfis_usuarios')
    .select('*')
    .eq('email', emailDigitado)
    .eq('senha', senhaDigitada)
    .single(); // Esperamos apenas um resultado

  if (error || !data) {
    alert('Email ou senha incorretos!');
    console.error('Erro no login:', error);
  } else {
    alert('Bem-vindo de volta!');
    // Aqui você redireciona para a página principal do app (Dashboard)
    window.location.href = 'dashboard.html'; 
  }
};