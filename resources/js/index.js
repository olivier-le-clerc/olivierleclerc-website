import Isotope from 'isotope-layout';

import '../css/index.scss';
import { PortfolioItem } from './components/PortfolioItem';


// navmenu toggle buttons
document.querySelectorAll('[role="navmenu-toggle"').forEach(button=>{
  button.addEventListener('click',event=>{
    document.getElementById('main-navmenu').classList.toggle('is-open')
  })
})

let iso;

//isotope
let grid = document.querySelector('.gallery')
if (grid) {
  iso = new Isotope(grid, {
    itemSelector: '.portfolio',
    masonry: {
      fitWidth: true,
      gutter: 20,
    }
  })
}

//flickity

let flickityConfig = {
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  autoPlay: true,
}

let carousselNeeded = (document.querySelectorAll(".carousel-cell").length > 1)
if (carousselNeeded) {
  let carousel = document.getElementById("carousel")
  carousel.dataset['flickity'] = JSON.stringify(flickityConfig)
}

window.addEventListener('resize',function(e){
  iso.arrange()
})

//bind filter on filter button click
document.querySelector('.portfolio-filters')?.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return
  let filter = e.target.dataset.filter
  iso.arrange({ 'filter': filter })
})

// bind filter on select change
document.querySelector('.filters-select-dropdown').addEventListener( 'change', function(e) {
  // get filter value from option value
  var filter = e.target.selectedOptions.item(0).value;
  iso.arrange({ 'filter': filter })
});
