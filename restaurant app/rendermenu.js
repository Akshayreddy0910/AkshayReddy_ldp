const renderMenu = () => {
    const searchTerm = menuSearch.value.toLowerCase();
    menuContainer.innerHTML = "";

    menu
        .filter((item) =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.course.toLowerCase().includes(searchTerm)
        )
        .forEach((item) => {
            const card = document.createElement("div");
            card.className = "menu-card";
            card.draggable = true;
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>Course: ${item.course}</p>
                <p>Price: ${item.price}</p>
            `;

            card.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", item.id);
            });

            card.addEventListener("click", () => {
                if (currentTableId === null) {
                    alert("Please open a table first by clicking on it.");
                    return;
                }
                addItemToTable(currentTableId, item.id);
                renderOrderModal(currentTableId);
                renderTables();
            });

            menuContainer.appendChild(card);
        });
};