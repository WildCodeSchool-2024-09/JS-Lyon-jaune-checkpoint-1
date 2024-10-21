function changerImage() {
    const image = document.getElementById('avatar');
    if (image.src.includes('image/avatar-bis.png')) {
        image.src = 'image/avatar.svg';
    } else {
        image.src = 'image/avatar-bis.png';
    }
}
