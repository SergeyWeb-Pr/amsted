function hoverLink() {
  const links = document.querySelectorAll('.header-bottom__list > .menu-item-has-children');

  links.forEach((link) => {
      const linkMenu = link.querySelector('.sub-menu');

      link.addEventListener('mouseover', function () {
          linkMenu.classList.add('active');
          this.classList.add('active');
      });

      link.addEventListener('mouseout', () => {
          linkMenu.classList.remove('active');

          links.forEach((li) => li.classList.remove('active'));
      });
  });
}

function hoverSubLinks() {
  const links = document.querySelectorAll('.header-bottom__list > li > ul > .menu-item-has-children');
  const mainLinks = document.querySelector('.header-bottom__list > li > ul');

  links.forEach((link) => {
      const linkMenu = link.querySelector('.header-bottom__list > li > ul > li > ul');

      link.addEventListener('mouseover', function () {
          this.classList.add('active');
          linkMenu.classList.add('active');
          mainLinks.classList.add('hover');
      });

      link.addEventListener('mouseout', () => {
          linkMenu.classList.remove('active');
          mainLinks.classList.remove('hover');
          links.forEach((li) => li.classList.remove('active'));
      });
  });
}
function addBirdIcon() {
  const links = document.querySelectorAll('.menu-item-has-children');

  links.forEach((link) => {
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
      link.appendChild(svg);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  hoverLink();
  hoverSubLinks();
  addBirdIcon();
});