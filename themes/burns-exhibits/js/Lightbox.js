function buildLightBoxes() {
    let buttons = document.getElementsByClassName('gallery-figure__figure-launch-button');
    for (let button of buttons) {
        button.addEventListener('click', event => {
            closeLightbox();
            openLightbox(button, 'gallery-figure');
        });
    }
}

function closeLightbox() {
    let lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.parentElement.removeChild(lightbox);
    }
}

function openLightbox(button, parentClass) {
    let image = button.getElementsByClassName(`${parentClass}__image`)[0];
    let heading = button.getElementsByClassName(`${parentClass}__heading`)[0];
    let text = button.getElementsByClassName(`${parentClass}__text`)[0];

    const container = document.createElement('div');
    container.id = 'lightbox';
    const lightbox = `
<figure class="lightbox__figure">
    <img class="lightbox__image" src=${image.src} alt=${image.alt}>
    <figcaption  class="lightbox__caption">
        <h3 class="lightbox__heading">${heading.innerHTML}</h3>
        <div class="lightbox_text">${text.innerHTML}</div>
    </figcaption>
</figure>
`;
    container.innerHTML = lightbox;

    const overlay = document.createElement('div');
    overlay.id ='lightbox__overlay';
    overlay.appendChild(container);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    overlay.addEventListener('click', event => {
        console.log(event);
        if (event.target === overlay) {
            console.log('yes')
        } else {
            console.log('nope');
            console.log(event.target);
        }
        //removeOverlay();
    });
}

function removeOverlay() {
    let overlay = document.getElementById('lightbox__overlay');
    if (overlay) {
        overlay.parentElement.removeChild(overlay);
    }
}

export default buildLightBoxes;