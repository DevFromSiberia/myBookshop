import './styles/index.scss'
import { swiper, mySlider } from './components/Slider';
import Card from './components/Card'
import { Category, categoryListener } from './components/Category'
import { CONFIG } from './config'

const categoriesData = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel & Maps']

const categoryList = document.querySelector('.categories')
categoryList.insertAdjacentHTML('afterbegin', Category(categoriesData))
categoryListener()

const url = `https://www.googleapis.com/books/v1/volumes?q="subject:${categoriesData[0]}"&key=${CONFIG.key}&printType=books&startIndex=0&maxResults=6&langRestrict=en`

fetch(url)
  .then(data => data.json())
  .then(data => {
    const books = data.items
    const booksList = document.querySelector('.books__list')
    books.map(book => booksList.insertAdjacentHTML('beforeend', Card(book)))
  })
  .catch(() => alert('Ошибка получения данных с сервера'))

