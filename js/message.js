const initMessage = (element, buttonClass) => {
  const button = element.querySelector(buttonClass);

  function closeMessage() {
    element.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  }

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      closeMessage();
    }
  }

  function onDocumentClick(evt) {
    if (evt.target === element) {
      closeMessage();
    }
  }

  button.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick, true);
};

const showMessage = (templateId) => {
  const template = document.querySelector(`#${templateId}`).content;
  const messageElement = template.querySelector(`.${templateId}`).cloneNode(true);

  initMessage(messageElement, `.${templateId}__button`);

  document.body.appendChild(messageElement);
};

const showError = function(templateId, time) {
  const template = document.querySelector(`#${templateId}`).content;
  const messageElement = template.querySelector(`.${templateId}`).cloneNode(true);
  document.body.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, time);
};

export { showMessage, showError };
