const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function abrirListaNegra() {
    window.open('https://docs.google.com/spreadsheets/d/1_4typYQUWnpwSbFlFTVHSEil8JFFD8S2/edit?usp=drivesdk', '_blank');
}

function abrirFeedback() {
    document.querySelector('.feedback').classList.toggle('hidden');
}

function abrirInscricao() {
    document.querySelector('.inscricao').classList.toggle('hidden');
}

document.getElementById('foto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo-evento').value;
    const galeria = document.getElementById('galeria');
    const novoEvento = document.createElement('div');
    novoEvento.innerText = titulo;
    galeria.appendChild(novoEvento);
});
