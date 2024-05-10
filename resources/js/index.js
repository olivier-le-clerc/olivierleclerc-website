import Isotope from 'isotope-layout';
import '../css/index.scss';

setTimeout(function(){

  let iso;
let grid = document.querySelector('.gallery')
if (grid) {
  iso = new Isotope(grid, {
    itemSelector: '.portfolio',
    masonry: {
      fitWidth: true,
    }
  })

}

},500)



document.querySelector('.portfolio-filters')?.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return
  let filter = e.target.dataset.filter
  iso.arrange({ 'filter': filter })
})
