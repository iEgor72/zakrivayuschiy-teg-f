const saveButton = document.querySelector('.save-button');
const saveDialog = document.getElementById('save-dialog');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});
