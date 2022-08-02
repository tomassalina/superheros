const $modal = document.getElementById('modal');

const openModal = $element => {
  if ($element.id === 'modal' || $element.id === 'close-button')
    return $modal.classList.remove('open');

  if ($element.classList.value.includes('footer__image')) {
    return $modal.classList.add('open');
  }
};

document.body.addEventListener('click', e => {
  const $el = e.target;
  if (['IMG', 'SECTION'].includes($el.tagName)) return openModal($el);
});
