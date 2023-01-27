import { formatAuthor, formatDescr, formatPrice } from './Format'
import placeholderImg from '../img/placeholderImg.png'

function Card(book) {
  let authors = formatAuthor(book.volumeInfo.authors)
  let title = book.volumeInfo.title
  let description = formatDescr(book.volumeInfo.description)
  let price = formatPrice(book.saleInfo.listPrice)
  let imageUrl = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : placeholderImg
  let id = book.id

  const html = `<li class="books__item" data-id="${id}">
  <div style="background-image: url(${imageUrl});" class="cover"></div>
  <div class="descr">
    <p class="author">${authors}</p>
    <h2 class="title">${title}</h2>
    <div class="rate">
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
      </svg>
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
      </svg>
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
      </svg>
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
      </svg>
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
      </svg> 
      <span>252 revies</span>
    </div>
    <p class="text">${description}</p>
    <div class="price">${price}</div>
    <button class="buyBtn" data-id="${id}">buy now</button>
  </div>
</li>`
  return html
}

const cardBtnListener = (cart) => {
  const booksItems = document.querySelectorAll(".books__item")
  const listener = (event) => {
    const cartCounterElement = document.querySelector('#cartCounter')
    let curCount = +cartCounterElement.textContent
    cartCounterElement.textContent = curCount + 1
    event.target.classList.add('buyBtn-inCart')
    event.target.textContent = 'in the cart'
    cart.push(event.target.dataset.id)
    event.target.removeEventListener('click', listener)
  }

  booksItems.forEach(book => {
    const bookBtn = book.querySelector('.buyBtn')
    if (cart.includes(bookBtn.dataset.id)) {
      bookBtn.classList.add('buyBtn-inCart')
      bookBtn.textContent = 'in the cart'
    } else {
      bookBtn.addEventListener('click', listener)
    }
  })
}

export { Card, cardBtnListener }