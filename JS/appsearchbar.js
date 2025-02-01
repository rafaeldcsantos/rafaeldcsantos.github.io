/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


  document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const appIcons = document.querySelectorAll('.appcontainer a');

    appIcons.forEach((icon) => {
      const text = icon.textContent.toLowerCase();
      if (text.includes(filter)) {
        icon.style.display = 'flex'; // Show matching items
      } else {
        icon.style.display = 'none'; // Hide non-matching items
      }
    });
  });
