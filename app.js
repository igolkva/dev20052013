function generateLink() {
    const linkNameInput = document.getElementById('linkName');
    const linkName = linkNameInput.value.trim();

    if (linkName !== '') {
        const linkList = document.getElementById('linkList');
        const listItem = document.createElement('li');
        listItem.textContent = linkName;
        linkList.appendChild(listItem);
    }

    linkNameInput.value = '';
}

function replicatePage() {
    const linkNameInput = document.getElementById('linkName');
    const linkName = linkNameInput.value.trim();

    if (linkName !== '') {
        const newPageUrl = window.location.origin + '/' + encodeURIComponent(linkName);
        window.open(newPageUrl, '_blank');
    }
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const listItem = checkbox.closest('li');
        if (listItem) {
            listItem.remove();
        }
    });
}
