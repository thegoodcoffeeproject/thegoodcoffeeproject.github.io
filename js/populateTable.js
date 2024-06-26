const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];

document.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < markers.length; ++i) {
        console.log(1);
        const row = document.createElement('tr');

        // Assuming markers has job, name, time, date, image, longitude, latitude properties
        const html = `
            <td>${markers[i].job}</td>
            <td>${markers[i].name}</td>
            <td>${markers.time}</td>
            <td>${markers[i].date}</td>
            <td><img src="${markers[i].image}" alt="Image" style="width: 50px; height: auto;"></td>
            <td>${markers[i].lng}</td>
            <td>${markers[i].lat}</td>
        `;

        row.innerHTML = html;
        tableBody.appendChild(row);
    
    }
 });

