const coin = {
    state: 0,
  
    flip: function () {
      const number = Math.round(Math.random())
      this.state = number
    },
  
    toString: function () {
      if (this.state === 0) return 'Heads'
      return 'Tails'
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      image.src = 
      +'.png'
      document.body.appendChild(image)
      console.log(this.toString)
      return image;
    },
  };

  function display20Flips() {
    document.body.innerHTML = ''
    const results = [];
    for (let i = 0; i < 20; i++){
        coin.flip()
        const flipResult = coin.toString()
        results.push(flipResult)
    }
    const resultsElement = document.createElement("h3")
    resultsElement.innerText = results
    document.body.appendChild(resultsElement)
    return results
  }

  function display20Images() {
    document.body.innerHTML = ''
    const results = [];
    for (let i = 0; i < 20; i++){
        const flipResultImage = document.createElement("img")
        coin.flip()
        const flipResult = coin.toString()
        flipResultImage.src = flipResult +'.png' 
        results.push(flipResult)
        document.body.appendChild(flipResultImage)
    }
    const resultsElement = document.createElement("h3")
    resultsElement.innerText = results
    document.body.appendChild(resultsElement)
    return results
  }