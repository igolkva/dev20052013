document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/pages')
        .then(response => response.json())
        .then(pages => {
            const adminList = document.getElementById('adminList');
            pages.forEach(page => {
                const listItem = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = page;
                listItem.appendChild(checkbox);
                listItem.appendChild(document.createTextNode(page));
                adminList.appendChild(listItem);
            });
        });
});

function deleteSelected() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const pageName = checkbox.value;
        fetch(`/api/pages/${pageName}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    const listItem = checkbox.closest('li');
                    if (listItem) {
                        listItem.remove();
                    }
                }
            });
    });
}
