function searchItems() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var sections = document.querySelectorAll('.item-section');
  
    sections.forEach(function(section) {
      var sectionId = section.id.toLowerCase();
      var sectionTitle = section.querySelector('h2').innerText.toLowerCase();
  
      // Check if the search term matches the section ID or title
      if (sectionId.includes(searchTerm) || sectionTitle.includes(searchTerm)) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  
      // Check if the search term is related to the category
      var itemsContainer = section.querySelector('.item-container');
      var items = itemsContainer.querySelectorAll('.item');
  
      items.forEach(function(item) {
        var itemName = item.querySelector('img').alt.toLowerCase();
  
        if (itemName.includes(searchTerm)) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
  
  
  
  
  
  // Function to generate sample items with real images
function generateSampleItems(containerId, itemCount, category) {
    var container = document.getElementById(containerId);
  
    for (var i = 1; i <= itemCount; i++) {
      var itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.innerHTML = '<img src="https://source.unsplash.com/200x150/?' + category + '&sig=' + i + '" alt="' + category + ' ' + i + '">';
      container.appendChild(itemDiv);
    }
  }
  
  // Generate sample items for each section
  generateSampleItems("shoesItems", 5, "shoes");
  generateSampleItems("clothesItems", 5, "clothes");
  generateSampleItems("foodItems", 5, "food");
  generateSampleItems("electricFansItems", 5, "electric fans");  






// function showDropdown() {
//     var searchTerm = document.getElementById("searchInput").value.toLowerCase();
//     var dropdown = document.getElementById("categoryDropdown");
//     var categories = ["food", "clothes", "electric fans", "shoes"];
  
//     // Clear previous dropdown content
//     dropdown.innerHTML = '';
  
//     // Filter categories based on the search term
//     var filteredCategories = categories.filter(category => category.includes(searchTerm));
  
//     // Display matching categories in the dropdown
//     filteredCategories.forEach(function(category) {
//       var item = document.createElement("div");
//       item.className = "dropdown-item";
//       item.textContent = category;
//       item.onclick = function() {
//         selectCategory(category);
//       };
//       dropdown.appendChild(item);
//     });
  
//     // Show or hide the dropdown based on the number of matching categories
//     dropdown.style.display = filteredCategories.length > 0 ? 'block' : 'none';
//   }
  
//   // ... (your existing code) ...

// function selectCategory(category) {
//     var sections = document.querySelectorAll('.item-section');
  
//     sections.forEach(function(section) {
//       var sectionId = section.id.toLowerCase();
//       var sectionTitle = section.querySelector('h2').innerText.toLowerCase();
  
//       if (sectionId.includes(category) || sectionTitle.includes(category)) {
//         // Clear existing items
//         var itemsContainer = section.querySelector('.item-container');
//         itemsContainer.innerHTML = '';
  
//         // Generate sample items with images (replace with actual image URLs)
//         generateSampleItems(itemsContainer, category);
        
//         // Scroll to the relevant section
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     });
  
//     // Clear search input and hide the dropdown after selecting a category
//     document.getElementById("searchInput").value = '';
//     document.getElementById("categoryDropdown").style.display = 'none';
//   }
  
//   function generateSampleItems(container, category) {
//     for (var i = 1; i <= 5; i++) {
//       var itemDiv = document.createElement("div");
//       itemDiv.className = "item";
//       itemDiv.innerHTML = '<img src="' + getImageUrl(category, i) + '" alt="' + category + ' ' + i + '">';
//       container.appendChild(itemDiv);
//     }
//   }
  
//   function getImageUrl(category, index) {
//     // Replace with actual image URLs based on your categories
//     var baseUrl = "https://example.com/images/";
//     return baseUrl + category.replace(/\s+/g, '-') + '-' + index + '.jpg';
//   }
  

// function searchAndScroll() {
//     // Get the search input value
//     var searchInput = document.getElementById('searchInput').value.toLowerCase();

//     // Find the category based on the search input
//     var category = document.getElementById(searchInput);

//     // Scroll to the category if found
//     if (category) {
//         category.scrollIntoView({ behavior: 'smooth' });
//     } else {
//         alert('Category not found!');
//     }
// }
