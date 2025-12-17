document.addEventListener("DOMContentLoaded", function() {

    const tableData = [
    { year: "2018-2022", institution: "Milford Mill Academy", description: "Graduated as Salutatorian" },
    { year: "2021-2022", institution: "National Technical Honors Society", description: "Secretary" },
    { year: "2021-Present", institution: "HKBC", description: "Media Team" },
    { year: "2023-Present", institution: "McDaniel College Football", description: "Photographer/PR Member" },
    { year: "2025-Present", institution: "McDaniel College IT Help Desk", description: "Student Assistant" },
    { year: "2022-2026", institution: "McDaniel College", description: "*Currently enrolled*" }
  ];

  const tbody = document.getElementById("tableBody");

  tableData.forEach(item => {
    const row = document.createElement("tr");

    const yearCell = document.createElement("td");
    yearCell.textContent = item.year;
    row.appendChild(yearCell);

    const institutionCell = document.createElement("td");
    institutionCell.textContent = item.institution;
    row.appendChild(institutionCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = item.description;
    row.appendChild(descriptionCell);

    tbody.appendChild(row);
  });

    function sortTableByColumn(columnIndex) {
            const tableBody = document.getElementById("tableBody");
            const rows = Array.from(tableBody.rows);
    
            // Sort rows
            rows.sort((a, b) => {
                const cellA = a.cells[columnIndex].innerText.toLowerCase();
                const cellB = b.cells[columnIndex].innerText.toLowerCase();
    
                if (cellA < cellB) return -1;
                if (cellA > cellB) return 1;
                return 0;
            });
    
            // Re-append sorted rows
            rows.forEach(row => tableBody.appendChild(row));
        }
    
        // When headers are clicked, sort by that column
        document.getElementById("sortYear").addEventListener("click", () => sortTableByColumn(0));
        document.getElementById("sortInstitution").addEventListener("click", () => sortTableByColumn(1));

        //Likes
        window.onload = function() {
        let likes = 0;

        const likeBtn = document.getElementById("likeBtn");
        const likeCount = document.getElementById("likeCount");

        likeBtn.addEventListener("click", function() {
            likes++;
            likeCount.textContent = likes + (likes === 1 ? " Like" : " Likes");
        });
    };

    let played = false;

  function playStartupSound() {
    if (!played) {
      const audio = document.getElementById("startup-sound");
      audio.play().catch((e) => {
        console.log("User interaction required before playing audio:", e);
      });
      played = true;
    }
  }

  // Listen for first user interaction
  window.addEventListener("click", playStartupSound, { once: true });

  const notepadIcon = document.getElementById("notepadIcon");
  const tablePopup = document.getElementById("tablePopup");
  const closeBtn = document.getElementById("closePopup");

  notepadIcon.addEventListener("click", () => {
    tablePopup.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    tablePopup.style.display = "none";
  });


});
