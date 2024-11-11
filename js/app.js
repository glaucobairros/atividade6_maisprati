document.addEventListener('DOMContentLoaded', function () {
    // Configuração do Swiper para o carrossel de jogos
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: { el: '.swiper-pagination' },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Navegação por setas do teclado para o carrossel
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    // Função de pesquisa de jogos pelo nome
    const gameInput = document.getElementById('gameInput');
    const searchIcon = document.querySelector('.search-icon');

    function searchGame() {
        let searchGame = gameInput.value.trim().toUpperCase();
        switch (searchGame) {
            case 'MARIO':
                swiper.slideTo(0);
                break;
            case 'POKEMON':
                swiper.slideTo(1);
                break;
            case 'ZELDA':
                swiper.slideTo(2);
                break;
            default:
                alert('Jogo não foi encontrado');
                break;
        }
    }

    gameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchGame();
        }
    });

    searchIcon.addEventListener('click', searchGame);

    // Dados para o modal de informações dos jogos
    const gameData = {
        mario: {
            title: "Super Mario Odyssey",
            description: "É um jogo de plataforma e aventura estrelado pelo encanador italiano mais conhecido em todo o mundo, que parte em busca de uma grande aventura almejando salvar a Princesa Peach do temível Bowser. Desta vez, Mario está acompanhado de um chapéu mágico extremamente versátil, que é capaz de atacar inimigos, assumir o controle de grandes criaturas e até mesmo ser utilizado como plataforma. Corra atrás das estrelas espalhadas pelo mapa e colete moedas especiais de cada região para comprar trajes únicos. Divirta-se no modo cooperativo que oferece suporte para até 2 jogadores simultaneamente, e explorem juntos um mapa aberto com uma infinidade de possibilidades.",
            details: [
                "Data de Lançamento: 27 de Outubro 2017",
                "Gênero: Plataforma, Aventura, Ação",
                "Nota: 9.2"
            ]
        },
        pokemon: {
            title: "Pokemon Legends Arceus",
            description: "Prepare-se para uma nova grande aventura Pokémon em Pokémon™ Legends: Arceus, um jogo totalmente novo da Game Freak que combina ação e exploração com as raízes de RPG da série Pokémon. Explore extensões naturais para capturar Pokémon selvagens, aprendendo seu comportamento, aproximando-se sorrateiramente e jogando uma Pokébola™ bem direcionada. Você também pode jogar a Pokébola contendo seu Pokémon aliado perto de um Pokémon selvagem para entrar na batalha sem problemas. Viaje por terra, mar e céus nas costas de Pokémon para explorar cada canto da região de Hisui - a antiga Sinnoh - e crie a primeira Pokédex da região",
            details: [
                "Data de Lançamento: 28 de Janeiro 2022",
                "Gênero: Ação, RPG",
                "Nota: 8.3"
            ]
        },
        zelda: {
            title: "The Legend of Zelda: Breath of the Wild",
            description: "Explore um vasto mundo de descobertas e aventuras épicas com Link. Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto.",
            details: [
                "Data de Lançamento: 3 de Março 2017",
                "Gênero: Aventura, Ação",
                "Nota: 9.7"
            ]
        }
    };

    // Função para abrir o modal com os dados do jogo
    function openModal(gameKey) {
        const modal = document.getElementById("gameModal");
        const gameTitle = document.getElementById("gameTitle");
        const gameDescription = document.getElementById("gameDescription");
        const gameDetails = document.getElementById("gameDetails");

        const gameInfo = gameData[gameKey];
        gameTitle.innerText = gameInfo.title;
        gameDescription.innerText = gameInfo.description;
        gameDetails.innerHTML = gameInfo.details.map(detail => `<li>${detail}</li>`).join("");

        modal.style.display = "flex";
    }

    function closeModal() {
        document.getElementById("gameModal").style.display = "none";
    }

    document.querySelectorAll(".social-icons .fa-plus").forEach((button, index) => {
        const gameKeys = ["mario", "pokemon", "zelda"];
        button.addEventListener("click", () => openModal(gameKeys[index]));
    });

    document.querySelector("#gameModal .close-btn").addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === document.getElementById("gameModal")) {
            closeModal();
        }
    });

    // Modal de Formulário de Contato
    const contactModal = document.getElementById("contactModal");
    const contactForm = document.getElementById("contactForm");
    const closeContactBtn = document.querySelector("#contactModal .close-btn");
    const envelopeIcons = document.querySelectorAll(".social-icons .fa-envelope");

    function openContactModal() {
        contactModal.style.display = "flex";
    }

    function closeContactModal() {
        contactModal.style.display = "none";
    }

    envelopeIcons.forEach(icon => {
        icon.addEventListener("click", openContactModal);
    });

    closeContactBtn.addEventListener("click", closeContactModal);

    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            closeContactModal();
        }
    });

    //Mensagem ao enviar o formulário
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Sua mensagem foi enviada com sucesso!");
        contactForm.reset();
        closeContactModal();
    });

    // Modal de Login
    const loginButton = document.querySelector('.login .button');
    const loginModal = document.getElementById('loginModal');
    const closeLoginBtn = document.querySelector('#loginModal .close-btn');

    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Menu hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu i');
    const navMenu = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            hamburgerMenu.classList.replace('fa-bars', 'fa-times');
        } else {
            hamburgerMenu.classList.replace('fa-times', 'fa-bars');
        }
    });
});
