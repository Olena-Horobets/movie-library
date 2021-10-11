// import onSearch from '../api/movies-api';
import refs from '../components/refs.js';
import svgURL from '../../images/sprite.svg';

refs.menuNav.addEventListener('click', goNavLink);

function goNavLink(e) {
    if (!e.target.classList.contains('site-nav__link--active')) {
        refs.buttonHomeMenu.classList.toggle('site-nav__link--active');
        refs.buttonLibraryMenu.classList.toggle('site-nav__link--active');

        if (e.target.dataset.nav === "home") {
            refs.sectionHeader.innerHTML = `
            <div class="page-header__search">
                <input class="page-header__search--input" type="input" placeholder="Поиск фильмов" />
                <svg class="search-img" width="12" height="12">
                    <use href="${svgURL}#icon-search"></use>
                </svg>
            </div >
            `;
            // onSearch();
        } else {
            refs.sectionHeader.innerHTML = `
            <div class="page-header__buttons">
                <button class="btn btn--primary btn__margin js-btn" type="button" data-action="watched">WATCHED</button>
                <button class="btn btn--primary js-btn" type="button" data-action="queue">QUEUE</button>
            </div>
            `;
        }
    }
}

