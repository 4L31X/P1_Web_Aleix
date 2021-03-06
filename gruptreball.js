window.onload = function(){
    var table_grup = "gruptreball.json";

    var request = new XMLHttpRequest();
    request.open('GET', table_grup);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var grup = request.response;
        var table = document.createElement("table");
        

        grup.forEach(element => {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var a = document.createElement("a");
            //var b = document.createElement("b");
            
            //any
            td.classList.add("any");
            td.textContent = element.any;
            tr.appendChild(td);

            //files
            td = document.createElement("td");
            a.textContent = element.fila1;
            td.appendChild(a);
            td.appendChild(document.createElement("br"));
            a = document.createElement("a");
            a.textContent = element.fila2;
            td.appendChild(a);
            td.appendChild(document.createElement("br"));
            a = document.createElement("a");
            a.textContent = element.fila3;
            td.appendChild(a);
            td.appendChild(document.createElement("br"));
            a = document.createElement("a");
            a.textContent = element.fila4;
            td.appendChild(a);
            tr.appendChild(td);
            table.appendChild(tr);
        });
        document.querySelector(".grup").appendChild(table);
    }
}