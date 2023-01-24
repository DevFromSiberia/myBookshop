import './styles/index.scss'
import { swiper, mySlider } from './components/Slider';
import Card from './components/Card'
const key = ''
const url = `https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${key}&printType=books&startIndex=0&maxResults=6&langRestrict=en`

fetch(url)
  .then(data => data.json())
  .then(data => {
    const books = data.items
    const booksList = document.querySelector('.books__list')
    books.map(book => booksList.insertAdjacentHTML('beforeend', Card(book)))
    console.log(books);
  })
  // .catch((data) => alert('Ошибка получения данных с сервера'))

