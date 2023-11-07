const fetchButton = document.querySelector("#fetch-table");
fetchButton?.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", (e) => {
        if (XHR.readyState == 4 && XHR.status == 200) {
            const table = document.querySelector("#content-target");
            table.innerHTML = XHR.responseText;
        }
    });

    XHR.open("GET", "./text.txt");
    XHR.send();
});
