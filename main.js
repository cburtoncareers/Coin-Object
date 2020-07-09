let coin = {
    state: 0,
    flip: function() {
        const headsOrTails = Math.round(Math.random())
        this.state = headsOrTails
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 1) {
            return "Heads"
        } else {
            return "Tails"
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 1) {
            image.src = "https://i.colnect.net/f/1847/333/50-Dollars-Barack-Obama-back.jpg"
        } else {
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWXKaDm9GrmvO-4J8X6Cz--q0V5tMWbnm08A&usqp=CAU"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function display20Flips () {
    for (let counter = 0; counter < 20; counter += 1) {
        coin.flip()
        let flipResult = document.createElement('h3')
        document.body.append(flipResult)
        flipResult.append(coin.toString())
    }
}
display20Flips()

function display20Images () {
    for ( let counter = 0; counter < 20; counter += 1) {
        coin.flip()
        document.body.append(coin.toHTML())

    }
}
display20Images()


//Heads or Tails Images

// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
