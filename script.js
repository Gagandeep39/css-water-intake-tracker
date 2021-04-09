const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCup(idx));
});

// Fulls all pevious cup till the selected cup
function highlightCup(index) {
  smallCups.forEach((cup, idx) => {
    if (
      smallCups[index].classList.contains('full') &&
      !smallCups[index].nextElementSibling.classList.contains('full')
    ) {
      index--;
    }

    if (idx <= index) cup.classList.add('full');
    else cup.classList.remove('full');
  });
}
