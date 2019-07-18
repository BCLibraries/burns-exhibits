import MicroModal from 'micromodal'; 

MicroModal.init({onShow: showModalImage});

function showModalImage(modal) {
    const img = document.getElementById(`image-${modal.id}`);
    console.log(`lookging for image-${modal.id}`)
    console.log(img)
    img.src = img.dataset.src;
}