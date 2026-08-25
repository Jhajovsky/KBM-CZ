document.getElementById('lead-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  form.classList.add('is-submitted');
  document.getElementById('lead-confirmation').classList.add('is-visible');
});
