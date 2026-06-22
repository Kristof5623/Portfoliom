document.addEventListener("DOMContentLoaded", () => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const greetings = [
        "• Hello",       // Angol
        "• Hola",        // Spanyol
        "• Bonjour",     // Francia
        "• Ciao",        // Olasz
        "• Hallo",       // Német
        "• Olá",         // Portugál
        "• नमस्ते",        // Hindi
        "• こんにちは",   // Japán
        "• 안녕하세요",   // Koreai
        "• 你好",        // Kínai
        "• Привет",      // Orosz
        "• مرحبا",      // Arab
        "• Merhaba",     // Török
        "• Γεια σας",    // Görög
        "• Hoi",         // Holland
        "• Hej",         // Svéd
        "• Cześć",       // Lengyel
        "• Ahoj",        // Cseh
        "• สวัสดี",        // Thai
        "• Xin chào",    // Vietnámi
        "• שלום",        // Héber
        "• Jambo",       // Szuahéli
        "• Aloha",       // Hawaii
        "• Halløj",      // Dán
        "• Hei",         // Finn
        "• Salut",       // Román
        "• Halo",        // Indonéz
        "• Üdvözletem!"  // Magyar (A legutolsó, ezen áll meg)
    ];

    const loaderText = document.getElementById("loader-text");
    const preloader = document.getElementById("preloader");

    let currentIndex = 0;

    const greetingInterval = setInterval(() => {
        currentIndex++;

        if (currentIndex >= greetings.length) {
            clearInterval(greetingInterval);

            setTimeout(() => {
                preloader.classList.add("hidden");

                setTimeout(() => {
                    preloader.style.display = "none";
                    document.body.classList.add('loaded');
                }, 800);

            }, 800);

        } else {
            loaderText.innerText = greetings[currentIndex];
        }
    }, 90);

});