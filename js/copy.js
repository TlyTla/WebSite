document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async function(event) {
      event.stopPropagation(); 

      const card = this.closest('.card');
      const contentElement = card.querySelector('.card-copy');

      if (!contentElement) return;

      const textToCopy = contentElement.textContent.trim();

      try {
        await navigator.clipboard.writeText(textToCopy);
      } 
      catch (err) {
        console.error('Ошибка копирования: ', err);
        fallbackCopy(textToCopy, this);
      }
    });
  });

  
  function fallbackCopy(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      button.textContent = '✔';
      setTimeout(() => button.textContent = '📋', 1500);
    } catch (err) {
      alert('Не удалось скопировать. Скопируйте текст вручную.');
    }
    document.body.removeChild(textarea);
  }
});