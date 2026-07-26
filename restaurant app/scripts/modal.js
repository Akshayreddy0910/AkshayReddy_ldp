const openModal = (tableId) => {
    currentTableId = tableId;
    orderModal.style.display = "block";
    modalTitle.textContent = findTable(tableId).name;
    renderOrderModal(tableId);
};

const closeModal = () => {
    orderModal.style.display = "none";
    currentTableId = null;
};

closeModalBtn.addEventListener("click", closeModal);

orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal) {
        closeModal();
    }
});