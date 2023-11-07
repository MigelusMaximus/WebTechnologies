const form = document.querySelector("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(form);


    const XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", (e) => {
        if (XHR.readyState == 4 && XHR.status == 200) {
            const resultBox = document.querySelector("#result");
            resultBox.textContent = XHR.responseText;
        }
    });

    XHR.open("POST", "./calc.php");
    XHR.send(formData);
});