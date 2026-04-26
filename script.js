// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const storyCards = document.querySelectorAll('.story-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            storyCards.forEach(card => {
                // Lấy tên truyện từ thuộc tính data-title
                const title = card.getAttribute('data-title').toLowerCase();
                
                // Nếu tên truyện có chứa từ khóa tìm kiếm -> hiển thị, ngược lại -> ẩn
                if (title.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
