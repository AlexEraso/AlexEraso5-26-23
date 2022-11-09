const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { 'x': x, 'y': y }

}

const emptyObject = () => {
  return {}
}

const distance = (point1, point2) => {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
}

const midpoint = (object1, object2) => {
  return { "x": (object1.x + object2.x) / 2, "y": (object1.y + object2.y) / 2 }
}

const sumSalaries = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i].salary
  }
  return sum
}

const newHighScore = (currentHighScore , scoreArray) => {
  let newHighScore = currentHighScore;
  for (let i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i].score > newHighScore) {
      newHighScore = scoreArray[i].score
    }
  }
  return newHighScore
}


const summarizeBooks = (books) => {
let summary = {titles:[] , pages:0}
for (let i = 0; i < books.length; i++){
  summary.titles.push(books[i].title)
  summary.pages = summary.pages + books[i].pages
}
}

