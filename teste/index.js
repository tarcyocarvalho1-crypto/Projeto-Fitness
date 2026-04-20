const filtro = document.querySelector('feTurbulence');
function animarRaio(){
     const novaSemente = Math.random() * 100;
    if (filtro){filtro.setAttribute('seed', novaSemente);
        requestAnimationFrame(animarRaio);
    }
    }
    animarRaio();