import * as basicLightbox from 'basiclightbox';
import Splide from '@splidejs/splide';
import refs from '../common/refs';
import { preventPageScroll, setPageScroll } from '../common/common';
import team from '../db/team.json';
import teamSplideOptions from '../options/splide-options';
import teamCardsTemplate from '../../templates/team-markup.hbs';

refs.footerLink.addEventListener('click', e => {
  e.preventDefault();
  preventPageScroll();

  window.addEventListener('keydown', onKeydown);

  const teamLightbox = basicLightbox.create(teamCardsTemplate(team), {
    onClose: () => {
      window.removeEventListener('keydown', onKeydown);
      setPageScroll();
    },
  });
  teamLightbox.show();

  new Splide('.splide', teamSplideOptions).mount();

  const closeBtn = document.querySelector('.js-modal-team__close-btn');
  closeBtn.addEventListener('click', teamLightbox.close);

  function onKeydown(e) {
    if (e.code !== 'Escape') return;
    teamLightbox.close();
  }
});
