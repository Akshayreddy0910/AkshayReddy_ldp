const renderTables = () => {
    const searchTerm = tableSearch.value.toLowerCase();
    tablesContainer.innerHTML = "";

    tables
        .filter((table) => table.name.toLowerCase().includes(searchTerm))
        .forEach((table) => {
            const card = document.createElement("div");
            card.className = "table-card";
            card.innerHTML = `
                <h3>${table.name}</h3>
                <p>Items: ${table.totalItems}</p>
                <p>Total: ${table.total}</p>
            `;

            card.addEventListener("click", () => openModal(table.id));

            card.addEventListener("dragover", (e) => {
                e.preventDefault();
                card.style.background = "cornsilk";
            });

            card.addEventListener("dragleave", () => {
                card.style.background = "";
            });

            card.addEventListener("drop", (e) => {
                e.preventDefault();
                card.style.background = "";
                const menuItemId = Number(e.dataTransfer.getData("text/plain"));
                addItemToTable(table.id, menuItemId);
                renderTables();
                if (currentTableId === table.id) {
                    renderOrderModal(table.id);
                }
            });

            tablesContainer.appendChild(card);
        });
};