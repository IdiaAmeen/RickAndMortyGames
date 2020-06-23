

window.onload = function () {
  console.log('our js works!')
}

async function getCharacter() {
  const response = await axios.get("https://rickandmortyapi.com/api/character") // get JSON data from this endpoint
  let data = response.data.results
  console.log(data)

  let characterDiv = document.querySelector('.Characters')
  data.forEach(character => {
    let cDiv = document.createElement('div')
    let img = document.createElement('img')
    img.src = character.image;
    cDiv.appendChild(img)
    let p = document.createElement('p')
    p.innerText = character.name;
    cDiv.appendChild(p)

    let gender = document.createElement('gender')
    gender.innerText = character.gender;
    cDiv.appendChild(gender)



    characterDiv.appendChild(cDiv)
  })


}
getCharacter();




// const myDiv = document.getElementById('myDiv');
// console.log(myDiv)

// const names = response.data.name;
// console.log(names)
