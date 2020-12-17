window.onload = function(){
    var url_publicacions = "publicacions.json";

    var request = new XMLHttpRequest();
    request.open('GET', url_publicacions);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var publicacions = request.response;
        var ul = document.createElement("ul");

        publicacions.forEach(element => {
            //creem contenidor de informació
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = element.url;
            a.textContent = element.titol_publi;
            li.appendChild(a);
            ul.appendChild(li);

        });

        ul.classList.add("link_publi");
        document.querySelector(".public").appendChild(ul);
    }
}