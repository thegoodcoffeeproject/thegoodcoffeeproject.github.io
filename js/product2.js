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
    const marker = markers.find(m => m.no.toString() === markerId);
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
document.addEventListener('DOMContentLoaded', function() {
    const markerId = getURLParameter('marker');
    if (markerId) {
        displayMarkerById(markerId);
    } else {
        console.error('No marker specified in the URL');
    }
});