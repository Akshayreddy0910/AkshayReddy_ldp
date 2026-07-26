const findTable = (id) => {
    return tables.find((table) => table.id === id);
};

const recalcTable = (table) => {
    table.totalItems = table.orders.reduce((sum, order) => sum + order.quantity, 0);
    table.total = table.orders.reduce((sum, order) => sum + (order.quantity * order.price), 0);
};

const addItemToTable = (tableId, menuItemId) => {
    const table = findTable(tableId);
    const menuItem = menu.find((item) => item.id === menuItemId);

    const existingOrder = table.orders.find((order) => order.id === menuItem.id);

    if (existingOrder) {
        existingOrder.quantity += 1;
    } else {
        table.orders.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1
        });
    }

    recalcTable(table);
};