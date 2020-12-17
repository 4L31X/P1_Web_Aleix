window.onload = function(){
    var table_linies = "liniesrecerca.json";

    var request = new XMLHttpRequest();
    request.open('GET', table_linies);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var linies = request.response;
        var table = document.createElement("table");
        

        linies.forEach(element => {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var a = document.createElement("a");
            var b = document.createElement("b");

            //any
            td.textContent = element.any;
            tr.appendChild(td);

            //files
            td = document.createElement("td");
            a.textContent = element.fila1;
            td.appendChild(a);
            td.appendChild(document.createElement("br"));
            b.textContent = element.fila2;
            td.appendChild(b);
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
        
        table.classList.add("linies_recerca");
        document.querySelector(".recerca").appendChild(table);
    }
}