{
    const welcome = () => {
        console.log("Cześć! Dobrej zabawy!");
    }
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("greyMode");
        themeName.innerText = body.classList.contains("greyMode") ? "biały " : "szary ";
    };

    const init = () => {

        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
};