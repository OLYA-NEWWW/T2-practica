document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('promoModal');
  const promoButton = document.querySelector('.promo-button');
  const closeModal = document.querySelector('.close-modal');
  
  promoButton.addEventListener('click', function() {
    modal.style.display = 'block';
    resetForm(modal.querySelector('.promocode-block'));
  });
  
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function resetForm(form) {
    if (!form) return;
    const statusDiv = form.querySelector('.form-status');
    if (statusDiv) {
      statusDiv.style.display = 'none';
      statusDiv.innerHTML = '';
    }
  }

  document.querySelectorAll('.phone-input').forEach(input => {
    input.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      if (value.length > 0) {
        value = value.substring(1);
      }
      
      let formattedValue = '+7 (';
      if (value.length > 0) formattedValue += value.substring(0, 3);
      if (value.length > 3) formattedValue += ') ' + value.substring(3, 6);
      if (value.length > 6) formattedValue += '-' + value.substring(6, 8);
      if (value.length > 8) formattedValue += '-' + value.substring(8, 10);
      
      this.value = formattedValue;
    });
    input.placeholder = '+7 (___) ___-__-__';
  });

  initForm(document.querySelector('.promocode-block:not(.modal-form)'), 'phone', 'checkbox');
  initForm(document.querySelector('.modal-form'), 'modal-phone', 'modal-checkbox');

  function initForm(form, phoneId, checkboxId) {
    if (!form) return;
    
    const phoneInput = document.getElementById(phoneId);
    const checkbox = document.getElementById(checkboxId);
    const submitButton = form.querySelector('button[type="submit"]');
    const statusDiv = form.querySelector('.form-status');
    let isCodeSent = false; 

    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      processForm();
    });

    function processForm() {
      if (!statusDiv) return;
      
      statusDiv.style.display = 'block';
      statusDiv.innerHTML = '';
   
      if (!checkbox.checked) {
        showStatus('Необходимо принять условия соглашения', 'error');
        return;
      }
   
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (phoneDigits.length !== 11 || phoneDigits[0] !== '7') {
        showStatus('Пожалуйста, введите корректный номер телефона', 'error');
        return;
      }
     
      if (isCodeSent) {
        showStatus('На этот номер уже выслан промокод', 'info');
        return;
      }
      
      isCodeSent = true;
      showStatus('Промокод выслан на ваш номер', 'success');
    
      setTimeout(() => {
        const secondLine = document.createElement('div');
        secondLine.textContent = 'На этот номер уже выслан промокод';
        statusDiv.appendChild(secondLine);
      }, 3000);
    }

    function showStatus(message, type) {
      statusDiv.innerHTML = message;
      statusDiv.className = `form-status ${type}`;
    }
  }
});
