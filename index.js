// Buscando pelas classes do CSS para evitar o problema de ID maiúsculo/minúsculo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Garante que o código só rode se encontrar os elementos na tela
if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        // Se estiver escondido, mostra como flex. Se não, esconde.
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
}