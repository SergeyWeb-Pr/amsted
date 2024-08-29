function hoverLink() {
  const links = $('.header-bottom__list > .menu-item-has-children');
  links.each(function () {
    const link = $(this);
    const btnLink = link.find(' > svg');
    const linkMenu = link.find(' > .sub-menu');
    if (window.innerWidth > 768) {
      link.on('mouseover', function () {
        linkMenu.addClass('active');
        link.addClass('active')
      });
      link.on('mouseout', function () {
        linkMenu.removeClass('active');
        links.removeClass('active')
      })
    } else {
      let isOpen = !1;
      btnLink.on('click', function (event) {
        linkMenu.slideToggle();
        linkMenu.toggleClass('active');
        link.toggleClass('active');
        isOpen = !isOpen
      })
    }
  })
}
function addBirdIcon() {
  const links = document.querySelectorAll('.menu-item-has-children');
  links.forEach(link => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 20 20');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M5 7.5L10 12.5L15 7.5');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
    link.appendChild(svg)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  hoverLink();
  addBirdIcon();
});