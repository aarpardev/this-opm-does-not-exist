document.querySelector('#createinst').addEventListener('click', generateRandOPM)

function generateRandOPM () {
    // Write instruments to an array
    let fileContents = []
    fileContents[0] = `//MiOPMdrv sound bank Paramer Ver2002.04.22<br />
    //LFO: LFRQ AMD PMD WF NFRQ<br />
    //@:[Num] [Name]<br />
    //CH: PAN	FL CON AMS PMS SLOT NE<br />
    //[OPname]: AR D1R D2R	RR D1L	TL	KS MUL DT1 DT2 AMS-EN<br /><br />`

    for (let i = 0; i < 128; i++) {

      let randomSevens = []
      function generateSevens() {
          
          for (let i = 0; i < 6; i++) {
            let randomSeven = Math.floor(Math.random() * 8); // Generates numbers between 0 and 7
            randomSevens.push(randomSeven)
          }
      }
      
      let randomThirtyOnes = [];
      function generateThirtyOnes() {
          for (let i = 0; i < 12; i++) {
            let randomThirtyOne = Math.floor(Math.random() * 32); // Generates numbers between 0 and 31
            randomThirtyOnes.push(randomThirtyOne);
          }
      }
      
      let randomFifteens = [];
      function generateFifteens() {
          for (let i = 0; i < 11; i++) {
            let randomFifteen = Math.floor(Math.random() * 16); // Generates numbers between 0 and 15
            randomFifteens.push(randomFifteen);
          }
      }
      
      let randomOneTwentySevens = [];
      function generateOneTwentySevens() {
          for (let i = 0; i < 3; i++) {
            let randomOneTwentySeven = Math.floor(Math.random() * 128); // Generates numbers between 0 and 127
            randomOneTwentySevens.push(randomOneTwentySeven);
          }
      }
      
      let randomThrees = [];
      function generateThrees() {
          for (let i = 0; i < 8; i++) {
            const randomThree = Math.floor(Math.random() * 4); // Generates numbers between 0 and 3
            randomThrees.push(randomThree);
          }
      }

      generateSevens();
      generateThirtyOnes();
      generateFifteens();
      generateOneTwentySevens();
      generateThrees();
    
      let fourTeen = Math.floor(Math.random() * 15); // Generates number between 0 and 14
      let patch = i
      
      // Write the patch
      let inst = `@:${patch} Instrument ${patch}<br />
        LFO:  0 0 0 0 0<br />
        CH: 64 ${randomSevens[0]} ${randomSevens[1]} 0 0 120 0<br />
        M1: ${randomThirtyOnes[0]} ${randomThirtyOnes[1]} ${randomThirtyOnes[2]} ${randomFifteens[0]} ${randomFifteens[1]} ${randomOneTwentySevens[0]} ${randomThrees[0]} ${randomFifteens[2]} ${randomSevens[2]} ${randomThrees[1]} 0<br />
        C1: ${randomThirtyOnes[3]} ${randomThirtyOnes[4]} ${randomThirtyOnes[5]} ${randomFifteens[3]} ${randomFifteens[4]} ${randomOneTwentySevens[1]} ${randomThrees[2]} ${randomFifteens[5]} ${randomSevens[3]} ${randomThrees[3]} 0<br />
        M2: ${randomThirtyOnes[6]} ${randomThirtyOnes[7]} ${randomThirtyOnes[8]} ${randomFifteens[6]} ${randomFifteens[7]} ${randomOneTwentySevens[2]} ${randomThrees[4]} ${randomFifteens[8]} ${randomSevens[4]} ${randomThrees[5]} 0<br />
        C2: ${randomThirtyOnes[9]} ${randomThirtyOnes[10]} ${randomThirtyOnes[11]} ${randomFifteens[9]} ${randomFifteens[10]} 0 ${randomThrees[6]} ${fourTeen} ${randomSevens[5]} ${randomThrees[7]} 0<br /><br />`
      fileContents.push(inst);
    }

    // Display OPM contents on the frontend of the DOM
    document.querySelector('.theinst').innerHTML = fileContents.join(` `)

    const copyInst = document.querySelector(".theinst").innerText;

    // Create a Blob with the text content
    let patchBlob = new Blob([copyInst], { type: 'text/plain' })

    // Create an Object URL for the Blob
    const objectURL = window.URL.createObjectURL(patchBlob);

    // Create an invisible <a> element to trigger the download
    let randomBank = Math.floor(Math.random() * 9002)
    const a = document.createElement(`a`);
    a.style.display = 'none';
    a.href = objectURL;
    a.download = `coolbank${randomBank}.opm` // Specify the file name

    // Append the <a> element to the document
    document.body.appendChild(a);

    // Programmatically trigger a click event to download the file
    a.click();

    // Clean up by revoking the Object URL and removing the <a> element
    window.URL.revokeObjectURL(objectURL);
    document.body.removeChild(a);
}