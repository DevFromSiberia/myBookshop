function formatAuthor(authorsArr) {
  let authorsStr = ''

  if (!authorsArr) {
    authorsStr = 'No author'
    return authorsStr
  }

  authorsArr.forEach((author, index) => {
    if (index !== (+authorsArr.length - 1)) {
      authorsStr += `${author}, `
    } else {
      authorsStr += `${author}`
    }
  })
  return authorsStr
}

function formatDescr(description) {
  if (!description) {
    return 'No description'
  }

  const arrDescr = [...description.split(' ', 20)]
  return arrDescr.join(' ') + '...'
}

function formatPrice(priceObj) {
  let resPrice = '' //$4.99
  if (!priceObj) {
    resPrice = 'No price'
    return resPrice
  }

  if (priceObj.currencyCode === "RUB") {
    resPrice = `&#8381; ${priceObj.amount}`
  } else {
    resPrice = `${priceObj.amount} ${priceObj.currencyCode}`
  }

  return resPrice
}

export { formatAuthor, formatDescr, formatPrice }