class Table {
    constructor(header, data) {
        this.header = header;
        this.data = data;
    }

    createHeader() {
        var thead = document.createElement('thead');
        var tr = document.createElement('tr')

        this.header.forEach(function(header) {
            var th = document.createElement('th')
            th.textContent = header;
            tr.appendChild(th)
        })
        thead.appendChild(tr)
        return thead;
    }

    createBody() {
        var tbody = document.createElement('tbody')

        this.data.forEach(function(object) {
            var tr = document.createElement('tr')
            tr.innerHTML =
            `<td>${object.id}</td>
            <td>${object.name}</td>
            <td>${object.username}</td>
            <td>${object.email}</td>
            <td>${object.address.street}, ${object.address.suite}, ${object.address.city}</td>
            <td>${object.company.name}</td>`
            
            tbody.appendChild(tr)
        })
        return tbody;
    }

    createTable() {
        var table = document.createElement('table');
        table.classList.add("table", "table-hover");

        var thead = this.createHeader()
        var tbody = this.createBody()

        table.appendChild(thead)
        table.appendChild(tbody)

        var result = document.getElementById('list');
        result.append(table)
        
    }
}


// Get Data 
function getData (url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if(xhr.status === 200) {
            return cb(JSON.parse(xhr.responseText))
        }
    };
    xhr.open("GET", url)
    xhr.send()
}


getData('https://jsonplaceholder.typicode.com/users', function(datas) {

    var header = ['ID', 'Name', 'Username', 'Email', 'Address', 'Company']
    var data = datas;


    var table = new Table(header, data);
    table.createTable();
})

