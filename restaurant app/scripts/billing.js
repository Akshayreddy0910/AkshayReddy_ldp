const generateBill = () => {
    const table = findTable(currentTableId);

    if (table.orders.length === 0) {
        alert(`${table.name} has no orders yet.`);
        return;
    }

    let billText = `Bill for ${table.name}\n\n`;

    table.orders.forEach((order) => {
        billText += `${order.name} x${order.quantity} = ${order.quantity * order.price}\n`;
    });

    billText += `\nGrand Total: ${table.total}`;

    alert(billText);

    table.orders = [];
    recalcTable(table);
    closeModal();
    renderTables();
};

generateBillBtn.addEventListener("click", generateBill);