document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('dragstart', dragStart);
      card.addEventListener('dragend', dragEnd);
    });
  });
  
  function dragStart() {
    this.classList.add('dragging');
  }
  
  function dragEnd() {
    this.classList.remove('dragging');
  }
  