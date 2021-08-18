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