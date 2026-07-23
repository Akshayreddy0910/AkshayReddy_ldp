const renderOrderModal = (tableId) => {
    const table = findTable(tableId);
    orderBody.innerHTML = "";

    table.orders.forEach((order, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.name}</td>
            <td>${order.price}</td>
            <td><input type="number" class="quantity" value="${order.quantity}" min="1"></td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        const quantityInput = row.querySelector(".quantity");
        quantityInput.addEventListener("change", () => {
            order.quantity = Number(quantityInput.value);
            if (order.quantity < 1) order.quantity = 1;
            recalcTable(table);
            renderOrderModal(tableId);
            renderTables();
        });

        const deleteBtn = row.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            table.orders = table.orders.filter((o) => o.id !== order.id);
            recalcTable(table);
            renderOrderModal(tableId);
            renderTables();
        });

        orderBody.appendChild(row);
    });

    recalcTable(table);
    grandTotalEl.textContent = `Grand Total: ${table.total}`;
};