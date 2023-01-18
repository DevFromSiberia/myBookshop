import userIcon from '../../img/userIcon.png'
import searchIcon from '../../img/searchIcon.png'
import cartIcon from '../../img/cartIcon.png'

export function Header() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.innerHTML =
    `
  <h1 class="logo">Bookshop</h1>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">books</li>
      <li class="nav__item">audiobooks</li>
      <li class="nav__item">Stationery & gifts</li>
      <li class="nav__item">blog</li>
    </ul>
  </nav>
  <ul class="button__list">
    <li class="button__item">
      <img src="${userIcon}" alt="user" />
    </li>
    <li class="button__item">
      <img src="${searchIcon}" alt="user" />
    </li>
    <li class="button__item">
      <img src="${cartIcon}" alt="user" />
    </li>
  </div>
`
  return header
}