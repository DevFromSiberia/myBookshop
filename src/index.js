import './styles/index.scss'
import { Card, cardBtnListener } from './components/Card'
import { Category, categoryListener } from './components/Category'
import { CONFIG } from './config'

const cartCounter = 0
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
    books.map(book => {
      booksList.insertAdjacentHTML('beforeend', Card(book))
    })
    cardBtnListener()
  })
  .catch(() => alert('Ошибка получения данных с сервера'))

