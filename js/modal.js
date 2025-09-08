const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById;("modal-close");


function modalControl (openBtnId, modalId, modalBodyId, url) {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const modalBody = document.getElementById(modalBodyId);

  if(!openBtn || !modal || !modalBody) {
    console.error('no element', { openBtn, modal, modalBody })
    return;
  }

  openBtn.addEventListener("click", async () => {
    try {
      if(url) {
        const res = await fetch(url);
        const html = await res.text();
        modalBody.innerHTML = html;
      } else {
        console.error('fetching url wrong')
      }
      
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
    } catch (err) {
      modalBody.textContent = "데이터 불러오기 실패: " + err.message;
    }
  });


  modalBody.addEventListener('click', (e) => {
    if (e.target.closest('#modal-close')) {
      if (modal.open) modal.close();
      else modal.removeAttribute('open');
    }
  })

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const inDialog =
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top &&  e.clientY <= rect.bottom;
    if (!inDialog) modal.close();
  });

}

modalControl(
  "open-fd-modal",
  "modal",
  "modalBody",
  "../modal/feedback.html"
)

modalControl(
  "open-setting-modal",
  "modal",
  "modalBody",
  "../modal/settings.html"
)