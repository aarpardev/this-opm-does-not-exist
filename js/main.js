document.querySelector('#createinst').addEventListener('click', generateRandOPM)

function generateRandOPM () {

    let randomSevens = []
    function generateSevens() {
        
        for (let i = 0; i < 6; i++) {
          let randomSeven = Math.floor(Math.random() * 8); // Generates numbers between 0 and 7
          randomSevens.push(randomSeven)
        }
        console.log(randomSevens)
    }
    
    let randomThirtyOnes = [];
    function generateThirtyOnes() {
        for (let i = 0; i < 12; i++) {
          let randomThirtyOne = Math.floor(Math.random() * 32); // Generates numbers between 0 and 31
          randomThirtyOnes.push(randomThirtyOne);
        }
        console.log(randomThirtyOnes);
    }
    
    let randomFifteens = [];
    function generateFifteens() {
        for (let i = 0; i < 11; i++) {
          let randomFifteen = Math.floor(Math.random() * 16); // Generates numbers between 0 and 15
          randomFifteens.push(randomFifteen);
        }
        console.log(randomFifteens);
    }
    
    let randomOneTwentySevens = [];
    function generateOneTwentySevens() {
        for (let i = 0; i < 3; i++) {
          let randomOneTwentySeven = Math.floor(Math.random() * 128); // Generates numbers between 0 and 127
          randomOneTwentySevens.push(randomOneTwentySeven);
        }
        console.log(randomOneTwentySevens);
    }
    
    let randomThrees = [];
    function generateThrees() {
        for (let i = 0; i < 8; i++) {
          const randomThree = Math.floor(Math.random() * 4); // Generates numbers between 0 and 3
          randomThrees.push(randomThree);
        }
        console.log(randomThrees);
    }

    generateSevens();
    generateThirtyOnes();
    generateFifteens();
    generateOneTwentySevens();
    generateThrees();
    
    const fourTeen = Math.floor(Math.random() * 15); // Generates number between 0 and 14

     const theInst = `@:0 Instrument 0<br />
    LFO:  0 0 0 0 0<br />
    CH: 64 ${randomSevens[0]} ${randomSevens[1]} 0 0 120 0<br />
    M1: ${randomThirtyOnes[0]} ${randomThirtyOnes[1]} ${randomThirtyOnes[2]} ${randomFifteens[0]} ${randomFifteens[1]} ${randomOneTwentySevens[0]} ${randomThrees[0]} ${randomFifteens[2]} ${randomSevens[2]} ${randomThrees[1]} 0<br />
    C1: ${randomThirtyOnes[3]} ${randomThirtyOnes[4]} ${randomThirtyOnes[5]} ${randomFifteens[3]} ${randomFifteens[4]} ${randomOneTwentySevens[1]} ${randomThrees[2]} ${randomFifteens[5]} ${randomSevens[3]} ${randomThrees[3]} 0<br />
    M2: ${randomThirtyOnes[6]} ${randomThirtyOnes[7]} ${randomThirtyOnes[8]} ${randomFifteens[6]} ${randomFifteens[7]} ${randomOneTwentySevens[2]} ${randomThrees[4]} ${randomFifteens[8]} ${randomSevens[4]} ${randomThrees[5]} 0<br />
    C2: ${randomThirtyOnes[9]} ${randomThirtyOnes[10]} ${randomThirtyOnes[11]} ${randomFifteens[9]} ${randomFifteens[10]} 0 ${randomThrees[6]} ${fourTeen} ${randomSevens[5]} ${randomThrees[7]} 0`

    document.querySelector('.theinst').innerHTML = theInst

function copyThis () {
    const copyText = document.getElementById("finalinst").innerText;
    navigator.clipboard
      .writeText(copyText.toString())
      .then(() => {
        document.querySelector('.status').innerHTML = `Copied to clipboard!`
      })
      .catch(() => {
        document.querySelector('.status').innerHTML = `Error. Something went wrong.`
      });
}

copyThis ()
}