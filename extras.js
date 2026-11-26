
(() => {
  "use strict";

  const style = document.createElement("style");
  style.textContent = `
    .jx-section{width:min(900px,91%);margin:35px auto;padding:clamp(24px,5vw,45px);
      background:linear-gradient(145deg,#ffffff10,#ffffff05);
      border:1px solid #f5a9ca44;border-radius:25px;color:#fff9fc}
    .jx-tag{color:#e8c994;letter-spacing:4px;font-size:10px;margin-bottom:12px}
    .jx-section h2{color:#f5a9ca;font-family:'Playfair Display',serif;font-size:clamp(27px,5vw,38px);margin-bottom:15px}
    .jx-desc{color:#e6dce7;line-height:1.9;margin-bottom:20px}
    .jx-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:13px}
    .jx-card{background:#ffffff0a;border:1px solid #f5a9ca44;border-radius:16px;padding:18px}
    .jx-card h3{color:#f5a9ca;font-family:'Playfair Display',serif;margin-bottom:9px}
    .jx-btn{background:#f5a9ca;color:#10182f;border:0;border-radius:25px;padding:12px 18px;
      font-weight:bold;cursor:pointer;margin:5px 4px 5px 0}
    .jx-btn.alt{background:#ffffff12;color:#ffe5f0;border:1px solid #f5a9ca66}
    .jx-result{display:none;background:#f5a9ca12;border-radius:13px;padding:17px;
      margin-top:14px;color:#ffe5f0;line-height:1.9;animation:jxIn .4s}
    .jx-timeline{border-left:2px solid #f5a9ca66;margin:25px 0 10px 10px;padding-left:24px}
    .jx-time{position:relative;padding:0 0 25px}
    .jx-time:before{content:"♡";position:absolute;left:-37px;top:0;color:#f5a9ca;background:#10182f}
    .jx-time strong{color:#f5a9ca;display:block;margin-bottom:7px}
    .jx-jar{font-size:85px;text-align:center;margin:15px}
    .jx-match{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-top:20px}
    .jx-tile{min-height:75px;border-radius:13px;border:1px solid #f5a9ca66;
      background:#182443;color:#f5a9ca;font-size:28px;cursor:pointer}
    .jx-tile.open,.jx-tile.done{background:#f5a9ca;color:#10182f}
    .jx-progress{height:9px;background:#ffffff18;border-radius:20px;overflow:hidden;margin:15px 0}
    .jx-progress span{display:block;height:100%;width:0;background:#f5a9ca;transition:.3s}
    .jx-journey{display:grid;gap:12px}
    .jx-step{padding:16px;border:1px solid #f5a9ca44;border-radius:14px;background:#ffffff08}
    .jx-step b{color:#f5a9ca}
    .jx-wish{width:100%;min-height:100px;background:#10182f;color:white;border:1px solid #f5a9ca66;
      border-radius:13px;padding:14px;font:inherit;resize:vertical}
    .jx-wish-item{padding:12px;border-bottom:1px solid #ffffff20;color:#ffe5f0;line-height:1.7}
    .jx-lightbox{position:fixed;inset:0;background:#080e20ee;z-index:20000;
      display:none;align-items:center;justify-content:center;padding:20px}
    .jx-lightbox img{max-width:95%;max-height:80vh;object-fit:contain;border-radius:15px;border:2px solid #f5a9ca}
    .jx-lightbox button{position:absolute;top:20px;right:22px}
    .jx-nav{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:15px auto;width:90%}
    .jx-nav a{color:#ffe5f0;text-decoration:none;border:1px solid #f5a9ca55;
      border-radius:20px;padding:9px 13px;font-size:12px}
    @keyframes jxIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    @media(max-width:450px){.jx-match{gap:6px}.jx-tile{min-height:62px;font-size:23px}}
  `;
  document.head.appendChild(style);

  const notes = [
    "You deserve a day full of little reasons to smile. ♡",
    "Never forget how much your presence can mean to others.",
    "You are allowed to take life one little step at a time.",
    "I hope something unexpectedly lovely happens today.",
    "Your dreams deserve patience, effort and a chance.",
    "Keep a little space in your day for something fun.",
    "You don't have to be perfect to be appreciated.",
    "May your next chapter be full of beautiful surprises.",
    "A small achievement is still an achievement.",
    "I hope you always find reasons to be proud of yourself.",
    "Your laugh deserves to be heard often.",
    "Remember to celebrate the little victories.",
    "You can make an ordinary day feel special.",
    "May you meet people who bring out the best in you.",
    "Your ideas and dreams are worth believing in.",
    "Take a breath. You don't have to rush everything.",
    "I hope today gives you a reason to smile.",
    "Keep being curious about the world.",
    "You deserve kindness, including from yourself.",
    "May your favorite songs find you at the right time.",
    "There are still so many lovely memories ahead.",
    "I hope you discover something new that you love.",
    "Your happiness matters.",
    "Don't forget how far you've already come.",
    "May your days be softer and your laughs louder.",
    "Some of the best moments are the unexpected ones.",
    "Keep choosing the things that make you feel alive.",
    "I hope your future surprises you in the best way.",
    "You deserve friendships filled with honesty and laughter.",
    "Here's to more smiles, stories and little adventures. ♡"
  ];

  const sections = `
    <nav class="jx-nav">
      <a href="#jxTimeline">Memories</a>
      <a href="#jxJar">Happiness Jar</a>
      <a href="#jxOpen">Open When</a>
      <a href="#jxGame">Memory Game</a>
      <a href="#jxJourney">Birthday Journey</a>
      <a href="#jxWishes">Wish Corner</a>
    </nav>

    <section class="jx-section" id="jxTimeline">
      <p class="jx-tag">OUR LITTLE STORY</p>
      <h2>A Timeline Of Little Moments ♡</h2>
      <p class="jx-desc">A place for the moments that deserve to be remembered.
      You can edit these entries and add your own real memories.</p>
      <div class="jx-timeline">
        <div class="jx-time"><strong>The Beginning</strong>
          A new friendship and the first conversations.</div>
        <div class="jx-time"><strong>The Random Moments</strong>
          The jokes, unexpected talks and little surprises.</div>
        <div class="jx-time"><strong>The Memories</strong>
          All those small moments that became worth keeping.</div>
        <div class="jx-time"><strong>What's Next?</strong>
          More chapters, more stories and new experiences.</div>
      </div>
      <p class="jx-desc">The best part of a timeline is that it can keep growing. ♡</p>
    </section>

    <section class="jx-section" id="jxJar">
      <p class="jx-tag">PICK A LITTLE HAPPINESS</p>
      <h2>The Happiness Jar 🌷</h2>
      <p class="jx-desc">There are 30 little notes inside. Tap the jar and discover one.</p>
      <div class="jx-jar">🫙</div>
      <div style="text-align:center">
        <button class="jx-btn" id="jxDraw">Pick a note ✨</button>
      </div>
      <div class="jx-result" id="jxNote" aria-live="polite"></div>
      <p class="jx-desc" id="jxNoteCount" style="text-align:center;margin-top:12px">30 little notes waiting</p>
    </section>

    <section class="jx-section" id="jxOpen">
      <p class="jx-tag">FOR DIFFERENT MOMENTS</p>
      <h2>Open When... 💌</h2>
      <p class="jx-desc">Choose the message that matches the moment.</p>
      <div class="jx-grid" id="jxOpenGrid"></div>
      <div class="jx-result" id="jxOpenResult"></div>
    </section>

    <section class="jx-section" id="jxGame">
      <p class="jx-tag">A LITTLE CHALLENGE</p>
      <h2>Memory Matching Game 🎮</h2>
      <p class="jx-desc">Find all six matching pairs. Tap two cards at a time.</p>
      <div class="jx-progress"><span id="jxGameProgress"></span></div>
      <p id="jxGameStatus" class="jx-desc">0 of 6 pairs found</p>
      <div class="jx-match" id="jxMatchBoard"></div>
      <button class="jx-btn alt" id="jxRestart">Play Again ↻</button>
      <div class="jx-result" id="jxGameWin">You found them all! You're a champion of little surprises. ♡</div>
    </section>

    <section class="jx-section">
      <p class="jx-tag">A RANDOM LITTLE MOMENT</p>
      <h2>Surprise Button 🎀</h2>
      <p class="jx-desc">You never know what will appear next.</p>
      <button class="jx-btn" id="jxSurprise">Surprise Me!</button>
      <div class="jx-result" id="jxSurpriseResult"></div>
    </section>

    <section class="jx-section" id="jxJourney">
      <p class="jx-tag">THE ROAD TO MARCH 22</p>
      <h2>Your Birthday Journey 🎂</h2>
      <p class="jx-desc">A little journey leading up to your special day.</p>
      <div class="jx-journey">
        <div class="jx-step">🌸 <b>Today</b><br>Enjoy the little things around you.</div>
        <div class="jx-step">✨ <b>Before your birthday</b><br>Collect a few new memories and reasons to smile.</div>
        <div class="jx-step">🎀 <b>March 22, 2027</b><br>Your special day. A little surprise is waiting.</div>
      </div>
      <p class="jx-desc" style="margin-top:15px">Your original birthday countdown and locked gift are still part of the site.</p>
    </section>

    <section class="jx-section" id="jxWishes">
      <p class="jx-tag">A PLACE FOR YOUR DREAMS</p>
      <h2>Your Wish Corner ⭐</h2>
      <p class="jx-desc">Write a wish, a goal or something you'd love to do.
      Your notes are saved only in this browser on this device.</p>
      <textarea class="jx-wish" id="jxWishInput" maxlength="300" placeholder="One little wish I have..."></textarea>
      <button class="jx-btn" id="jxSaveWish">Save My Wish</button>
      <div id="jxWishList"></div>
    </section>

    <div class="jx-lightbox" id="jxLightbox">
      <button class="jx-btn" id="jxCloseLightbox">Close ✕</button>
      <img id="jxLargePhoto" alt="Selected memory">
    </div>
  `;

  function init() {
    if (document.getElementById("jxTimeline")) return;

    const footer = document.querySelector(".footer");
    if (footer) footer.insertAdjacentHTML("beforebegin", sections);
    else document.body.insertAdjacentHTML("beforeend", sections);

    // Happiness jar
    let remaining = [...notes];
    document.getElementById("jxDraw").onclick = () => {
      if (!remaining.length) remaining = [...notes];
      const index = Math.floor(Math.random() * remaining.length);
      const note = remaining.splice(index, 1)[0];
      const box = document.getElementById("jxNote");
      box.textContent = note;
      box.style.display = "block";
      document.getElementById("jxNoteCount").textContent =
        remaining.length + " notes still waiting";
    };

    // Open When messages
    const openMessages = [
      ["When you need a smile", "I hope something small makes you smile today. Maybe a song, a memory or a silly joke. ♡"],
      ["When you feel stressed", "Take things one step at a time. You don't have to figure everything out today."],
      ["When you're bored", "Your mission: discover one new song, watch something funny or try something you've never done."],
      ["When you need confidence", "You've made it through so many days already. Give yourself credit for that."],
      ["When you miss a memory", "Some moments stay special because they remind us of the people and experiences we appreciate."],
      ["When it's your birthday", "Happy Birthday, Jojo! I hope today brings you happiness, laughter and lovely surprises. ♡"]
    ];
    const openGrid = document.getElementById("jxOpenGrid");
    openMessages.forEach(([title, message]) => {
      const card = document.createElement("div");
      card.className = "jx-card";
      const heading = document.createElement("h3");
      heading.textContent = title;
      const button = document.createElement("button");
      button.className = "jx-btn alt";
      button.textContent = "Open message";
      button.onclick = () => {
        const result = document.getElementById("jxOpenResult");
        result.textContent = message;
        result.style.display = "block";
      };
      card.append(heading, button);
      openGrid.append(card);
    });

    // Matching game
    const symbols = ["🌷","🎀","⭐","🦋","💗","🌙"];
    let first = null, lock = false, pairs = 0;
    const board = document.getElementById("jxMatchBoard");
    const status = document.getElementById("jxGameStatus");
    const progress = document.getElementById("jxGameProgress");
    const win = document.getElementById("jxGameWin");

    function startGame() {
      first = null;
      lock = false;
      pairs = 0;
      win.style.display = "none";
      status.textContent = "0 of 6 pairs found";
      progress.style.width = "0%";
      board.replaceChildren();

      const deck = [...symbols, ...symbols]
        .sort(() => Math.random() - 0.5);

      deck.forEach(symbol => {
        const button = document.createElement("button");
        button.className = "jx-tile";
        button.textContent = "?";
        button.setAttribute("aria-label", "Hidden card");

        button.onclick = () => {
          if (lock || button.classList.contains("done") ||
              button === first || button.classList.contains("open")) return;

          button.textContent = symbol;
          button.classList.add("open");

          if (!first) {
            first = button;
            return;
          }

          if (first.textContent === symbol) {
            first.classList.remove("open");
            button.classList.remove("open");
            first.classList.add("done");
            button.classList.add("done");
            first = null;
            pairs++;
            status.textContent = pairs + " of 6 pairs found";
            progress.style.width = (pairs / 6 * 100) + "%";
            if (pairs === 6) win.style.display = "block";
          } else {
            const previous = first;
            first = null;
            lock = true;
            setTimeout(() => {
              previous.textContent = "?";
              button.textContent = "?";
              previous.classList.remove("open");
              button.classList.remove("open");
              lock = false;
            }, 750);
          }
        };
        board.append(button);
      });
    }

    document.getElementById("jxRestart").onclick = startGame;
    startGame();

    // Random surprise
    const surprises = [
      "Today's tiny reminder: you deserve good things. ♡",
      "A little challenge: play your favorite song and enjoy the moment.",
      "Make a list of three things you're grateful for today.",
      "Send someone a kind message. It might make their day.",
      "Try something new, even if it's something very small.",
      "Your next happy memory might be closer than you think.",
      "Take a moment to appreciate how far you've come."
    ];
    document.getElementById("jxSurprise").onclick = () => {
      const result = document.getElementById("jxSurpriseResult");
      result.textContent = surprises[Math.floor(Math.random() * surprises.length)];
      result.style.display = "block";
    };

    // Wish corner: local to this browser only
    const wishInput = document.getElementById("jxWishInput");
    const wishList = document.getElementById("jxWishList");
    const storageKey = "jojoLittleWorldWishes";

    function renderWishes() {
      wishList.replaceChildren();
      let saved = [];
      try { saved = JSON.parse(localStorage.getItem(storageKey) || "[]"); }
      catch (_) { saved = []; }

      saved.forEach(wish => {
        const item = document.createElement("div");
        item.className = "jx-wish-item";
        item.textContent = "♡ " + wish;
        wishList.append(item);
      });
    }

    document.getElementById("jxSaveWish").onclick = () => {
      const value = wishInput.value.trim();
      if (!value) return;
      let saved = [];
      try { saved = JSON.parse(localStorage.getItem(storageKey) || "[]"); }
      catch (_) { saved = []; }
      saved.unshift(value);
      localStorage.setItem(storageKey, JSON.stringify(saved.slice(0, 20)));
      wishInput.value = "";
      renderWishes();
    };
    renderWishes();

    // Existing gallery photos: click to enlarge
    const lightbox = document.getElementById("jxLightbox");
    const largePhoto = document.getElementById("jxLargePhoto");

    document.querySelectorAll(".gallery .photo-frame img").forEach(img => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        largePhoto.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    function closeLightbox() {
      lightbox.style.display = "none";
      largePhoto.removeAttribute("src");
    }
    document.getElementById("jxCloseLightbox").onclick = closeLightbox;
    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeLightbox();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
