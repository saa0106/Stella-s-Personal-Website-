document.addEventListener("DOMContentLoaded", function() {

    //**Landing Page**
    const btn = document.getElementById("enter-btn");
    const landing = document.getElementById("landing-page");
  
    btn.addEventListener("click", () => {
      landing.style.animation = "fadeOut 1s forwards";
  
      setTimeout(() => {
        landing.style.display = "none";
      }, 1000); // match the fadeOut duration
    });

    //**Aside with different features everytime the page reloads**
    const aside = document.getElementById('dynamicAside');
    const options = [asideGame, asideGallery, asideQuote];
    const random = options[Math.floor(Math.random() * options.length)];
    aside.innerHTML = random();

    const gallery = document.querySelector(".gallery-container");
    const toggleBtn = document.getElementById("toggleGallery");
  
    //**Hide/Show photo gallery**
    // Initially show the gallery
    gallery.classList.remove("hidden");
  
    toggleBtn.addEventListener("click", () => {
      // Toggle the hidden class to show/hide gallery
      gallery.classList.toggle("hidden");
  
      // Change the button text based on the gallery visibility
      if (gallery.classList.contains("hidden")) {
        toggleBtn.textContent = "Show Gallery";
      } else {
        toggleBtn.textContent = "Hide Gallery";
      }
    });
});


//**Aside Options**
function asideGame() {
    return `
      <div class="aside-section">
  <h1>🎮 2 Truths & a Lie</h1>
  <p id="ttl">Can you guess the lie?</p>
  <ul id="truthGame">
    <li onclick="checkAnswer(this, true)">
      <img class="game-img" src="Images/baby me.jpg" alt="bbyme">
      ⚡ I got me and my mom electrocuted when I was a baby.
    </li>
    <li onclick="checkAnswer(this, true)">
      <img class="game-img" src="Images/african beach.jpg" alt="africa">
      🏊🏾 I don't know how to swim.
    </li>
    <li onclick="checkAnswer(this, false)">
      <img class="game-img" src="Images/18 bday.jpg" alt="bday">
      👨🏿‍👩🏾‍👧🏾‍👦🏿 I have 8 siblings.
    </li>
  </ul>
</div>
    `;
  }
  
  function asideGallery() {
    return `
       <div class="ahead">
    <img id="star" src="Images/Star2.png" alt="Star"> 
  </div>
  <div class="category">
    <img src="Images/Togo 🇹🇬.jpg" alt="Togo">
    <br>
    <div class="c2"><img src="Images/music player.png" alt="Music player"></div>
  </div>
  <div class="category">
    <img src="Images/captaincold.jpg" alt="CC">
    <div>
      <h5 id="sq">"Make the Plan. Execute the Plan. 
      Expect the Plans to go off the rails. 
      Throw away the Plan." <br>-Leonard Snart</h5>
    </div>
  </div>
  <div class="category">
    <img src="Images/makeup.jpg" alt="beauty">
    <br>
    <div class="c3"><img src="Images/barcode2.png" alt="Barcode"></div>
  </div>
    `;
  }
  
  function asideQuote() {
    return `
      <div class="aside-section">
        <h1>💖 Daily Boost</h1>
        <p class="aside-text">“You’re like, really pretty.   ” <b>-Regina George</b></p>
        <img id="rg" src="Images/regina.jpg" alt="Regina George">
        <img id="rg" src="Images/M&M.jpg" alt="M&M">
        <img id="rg" src="Images/Ayra Starr.jpg" alt="Ayra Starr">
        
      </div>
    `;
  }
  
  //**Game Logic**
  function checkAnswer(el, correct) {
    const items = document.querySelectorAll('#truthGame li');
    items.forEach(item => item.classList.remove('correct', 'incorrect'));
    if (correct) {
      el.classList.add('correct');
    } else {
      el.classList.add('incorrect');
    }
  }  

/*background music for Homepage*/
function playMusic() {
  const audio = document.getElementById('backgroundMusic');
  audio.play();
}

function pauseMusic() {
  const audio = document.getElementById('backgroundMusic');
  audio.pause();
}
  


