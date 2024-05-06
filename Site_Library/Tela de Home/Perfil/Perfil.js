function showEditButton() {
    const editButton = document.getElementById('edit-button');
    editButton.style.display = 'block';
}

function hideEditButton() {
    const editButton = document.getElementById('edit-button');
    editButton.style.display = 'none';
}

function showImageUpload() {
    document.getElementById('profile-image-upload').click();
}

function previewProfileImage(event) {
    const profileImage = document.getElementById('profile-image');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}
// No final do seu arquivo "Perfil.js"
document.querySelectorAll('.access-button').forEach(button => {
    button.
   
  addEventListener('click', function (event) {
      event.preventDefault();
      
     
  const workPageURL = this.getAttribute('href');
      
     
  window.location.href = workPageURL;
    });
  });