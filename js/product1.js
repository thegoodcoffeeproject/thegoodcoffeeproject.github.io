// Example array of objects
function getURLParameter(name) {
    const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return decodeURI(results[1]) || 0;
    }
}

function displayMarkerById(markerId) {
    // Find the marker by id
    const marker = markers.find(m => m.id.toString() === markerId);
    if (!marker) {
        console.error('Marker not found');
        return;
    }

    const contentDiv = document.getElementById('content');
    
    // Clear previous content
    contentDiv.innerHTML = '';
    
    // Create and append new content
    const title = document.createElement('h2');
    title.textContent = marker.name;
    const description = document.createElement('p');
    description.textContent = marker.description;
    
    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
}
// Initial display
displayMarker(currentIndex);

// Next button functionality
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % markers.length; // Loop back to the first marker
    displayMarker(currentIndex);
});