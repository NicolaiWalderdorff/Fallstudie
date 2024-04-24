window.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
  try {
    const co2EmissionsData = [
      { land: "USA", Unternehmen: "Apple", CO2Emissionen: 10000 },
      { land: "China", Unternehmen: "Alibaba", CO2Emissionen: 12000 },
      { land: "Deutschland", Unternehmen: "BMW", CO2Emissionen: 8245 },
      { land: "Belgien", Unternehmen: "Anheuser-Busch", CO2Emissionen: 5471 },
      { land: "Finnland", Unternehmen: "Fiskars", CO2Emissionen: 3145 },
      { land: "Schweden", Unternehmen: "Spotify", CO2Emissionen: 4712 },
      { land: "Süd-Korea", Unternehmen: "Hybe", CO2Emissionen: 9475 },
      { land: "Brasilien", Unternehmen: "Petrobas", CO2Emissionen: 11457 },
      { land: "Indien", Unternehmen: "Tata Motors", CO2Emissionen: 18001 },
      { land: "Russland", Unternehmen: "Lukoil", CO2Emissionen: 9475 },
      { land: "Kanada", Unternehmen: "Ubisoft", CO2Emissionen: 8457 },
      { land: "Mexiko", Unternehmen: "Femsa", CO2Emissionen: 1548 },
      { land: "Polen", Unternehmen: "Eurocash", CO2Emissionen: 3547 },
      { land: "Österreich", Unternehmen: "RedBull", CO2Emissionen: 2548 },
      { land: "Schweiz", Unternehmen: "Lindt", CO2Emissionen: 1451 },
      { land: "China", Unternehmen: "Weibo", CO2Emissionen: 15875 },
      { land: "China", Unternehmen: "Tencent", CO2Emissionen: 18541 },
      { land: "China", Unternehmen: "iQIYI", CO2Emissionen: 5842 }
    ];

    renderTable(co2EmissionsData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderTable(data) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = ''; // Vorherige Daten entfernen

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.land}</td>
      <td>${item.Unternehmen}</td>
      <td>${item.CO2Emissionen}</td>
    `;
    dataContainer.appendChild(row);
  });
}

// JavaScript-Code für die Funktionalität der Webseite

// Funktion zum Filtern der Tabelle basierend auf Benutzereingabe
function filterTable() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    let found = false;

    cells.forEach(cell => {
      if (cell.textContent.toUpperCase().includes(input)) {
        found = true;
      }
    });

    if (found) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Funktion zum Sortieren der Tabelle nach Land
function sortByCountry() {
  const table = document.querySelector('table');
  const rows = Array.from(table.querySelectorAll('tr'));

  const data = rows.slice(1);

  data.sort((a, b) => {
    const countryA = a.cells[0].textContent.toUpperCase();
    const countryB = b.cells[0].textContent.toUpperCase();
    return countryA.localeCompare(countryB);
  });

  data.forEach(row => {
    table.appendChild(row);
  });
}

// Funktion zum Sortieren der Tabelle nach Unternehmen
function sortTableByCompany() {
  const table = document.querySelector('table');
  const rows = Array.from(table.querySelectorAll('tr'));

  const data = rows.slice(1);

  data.sort((a, b) => {
    const companyA = a.cells[1].textContent.trim().toUpperCase();
    const companyB = b.cells[1].textContent.trim().toUpperCase();
    return companyA.localeCompare(companyB);
  });

  data.forEach(row => {
    table.appendChild(row);
  });
}

