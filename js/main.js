const tarea = document.getElementById('content-chat-input');



function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;

    const max = parseInt(getComputedStyle(el).maxHeight);
    el.style.overflowY = (el.scrollHeight > max) ? 'auto' : 'hidden';
}

['input','change','cut','paste'].forEach(evt =>
    tarea.addEventListener(evt, () => autoResize(tarea)));

autoResize(tarea)