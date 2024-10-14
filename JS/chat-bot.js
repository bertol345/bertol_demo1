const chatToggleBtn = document.getElementById('chat-toggle-btn');

// Mostrar/Ocultar el widget de Tidio al hacer clic
chatToggleBtn.addEventListener('click', () => {
    const tidioChat = document.querySelector('iframe[src*="tidio"]');
    if (tidioChat) {
        tidioChat.style.display = tidioChat.style.display === 'none' ? 'block' : 'none';
    }
});
