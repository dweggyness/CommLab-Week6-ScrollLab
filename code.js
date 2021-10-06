AOS.init({
  mirror: true,
});

document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
  detail.dataset.aos = 'fade-up';

  return; 
  if (detail.dataset.aos === 'fade-up') {
    detail.dataset.aos = 'fade-down';
  } else if (detail.dataset.aos === 'fade-down') {
    detail.dataset.aos = 'fade-up';
  }
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
  detail.dataset.aos = 'fade-down';

  return; 
  if (detail.dataset.aos === 'fade-up') {
    detail.dataset.aos = 'fade-down';
  } else if (detail.dataset.aos === 'fade-down') {
    detail.dataset.aos = 'fade-up';
  }
});