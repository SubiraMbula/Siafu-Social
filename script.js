// Get all the list titles
const listTitles = document.querySelectorAll('.list-title');

// Add event listener to each list title
listTitles.forEach((title) => {
  title.addEventListener('click', toggleListContent);
});

// Toggle the list content when a list title is clicked
function toggleListContent() {
  // Get the corresponding list content
  const listContent = this.nextElementSibling;

  // Check if the clicked list item is already expanded
  const isExpanded = listContent.style.display === 'block';

  // Close all other list items
  closeAllListItems();

  // Toggle the clicked list item
  if (isExpanded) {
    listContent.style.display = 'none';
  } else {
    listContent.style.display = 'block';
  }
}

// Close all list items except the clicked one
function closeAllListItems() {
  listTitles.forEach((title) => {
    const listContent = title.nextElementSibling;
    listContent.style.display = 'none';
  });
}
