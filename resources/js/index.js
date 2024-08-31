import Isotope from 'isotope-layout';

import '../css/index.scss';

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
    // resize:false,
    masonry: {
      fitWidth: true,
      gutter: 20,
    }
  })

  window.addEventListener('resize',function(e){
    console.log('resize')
    this.setTimeout(function(){
      iso.layout()

    },1000)
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
}




