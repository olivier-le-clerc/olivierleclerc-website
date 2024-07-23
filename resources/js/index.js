import Isotope from 'isotope-layout';

import '../css/index.scss';
import { PortfolioItem } from './components/PortfolioItem';

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


document.querySelector('.portfolio-filters')?.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return
  let filter = e.target.dataset.filter
  iso.arrange({ 'filter': filter })
})

// let lightbox = document.querySelector('.lightbox')

// lightbox.addEventListener('click', function (e) {
//   toggleLightBox()
//   window.history.back()
// })

// document.querySelector('.gallery')?.addEventListener('click', async function (e) {
//   let postId = e.target.dataset.postId
//   if (!postId) {
//     return
//   }
//   window.history.pushState({}, '', postId)
//   toggleLightBox()
//   let res = await fetch(window.origin + "/wp-json/wp/v2/portfolio/" + postId).then(e => e.json());
//   console.log(res.title)
//   // lightbox.innerHTML = res.title.rendered
// })

// function toggleLightBox() {
//   lightbox.classList.toggle('is-hidden')
// }

customElements.define("portfolio-item", PortfolioItem)
