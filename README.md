from pathlib import Path

html = r'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jojo's Little World ♡</title>
<style>
:root{--pink:#ffb7d5;--pink2:#ffe2ef;--navy:#101a3a;--navy2:#1c2b58;--ink:#26304c;--cream:#fff9fc}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Georgia,'Times New Roman',serif;color:var(--ink);background:var(--cream);overflow-x:hidden}
header{min-height:92vh;display:grid;place-items:center;text-align:center;padding:50px 22px;color:white;background:radial-gradient(circle at 20% 20%,#5a477b 0,transparent 32%),linear-gradient(145deg,#101a3a,#253765 60%,#b85e91)}
.hero{max-width:760px}.eyebrow{letter-spacing:4px;text-transform:uppercase;font:12px Arial,sans-serif;color:#ffd8e9}.hero h1{font-size:clamp(48px,9vw,92px);line-height:.98;margin:20px 0;color:#fff2f8}.hero p{font:17px/1.8 Arial,sans-serif;color:#f6eaf2;max-width:580px;margin:20px auto}.heart{font-size:28px;color:var(--pink);animation:pulse 1.8s infinite}@keyframes pulse{50%{transform:scale(1.18)}}
.btn{display:inline-block;border:0;border-radius:30px;padding:14px 24px;background:var(--pink);color:var(--navy);font-weight:bold;text-decoration:none;cursor:pointer;font: bold 14px Arial,sans-serif;margin:10px 5px}.btn.secondary{background:transparent;border:1px solid #f8c8df;color:white}
section{padding:78px 20px;max-width:1000px;margin:auto}.section-kicker{text-transform:uppercase;letter-spacing:3px;font:11px Arial,sans-serif;color:#bd6791;text-align:center}.section-title{text-align:center;font-size:clamp(30px,5vw,46px);color:var(--navy);margin:12px 0 28px}.letter{background:white;border:1px solid #f4d6e4;border-radius:24px;padding:clamp(25px,5vw,48px);box-shadow:0 16px 50px #25376512;font:16px/2 Arial,sans-serif}.letter p{margin:0 0 16px}.signature{font-family:Georgia,serif;font-style:italic;color:#a64e7a;font-size:21px}
.count-wrap{background:var(--navy);color:white;border-radius:28px;padding:40px 20px;text-align:center}.countdown{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:25px}.time{background:#ffffff12;border:1px solid #ffffff24;border-radius:16px;min-width:88px;padding:18px 12px}.time strong{display:block;font: bold 32px Arial,sans-serif;color:var(--pink)}.time span{font:11px Arial,sans-serif;color:#e8dce8;text-transform:uppercase;letter-spacing:1px}
.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.photo{height:270px;border:2px dashed #e8a8c5;border-radius:22px;background:linear-gradient(145deg,#fff0f7,#e8eafa);display:grid;place-items:center;text-align:center;overflow:hidden;position:relative;color:#74516b;font:14px Arial,sans-serif}.photo img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}.photo input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer}.photo span{padding:20px;pointer-events:none}
.quiz{background:#f8eaf2;border-radius:28px;padding:clamp(24px,5vw,42px)}.question{font:18px/1.6 Arial,sans-serif;font-weight:bold;color:var(--navy);margin-bottom:18px}.answers{display:grid;gap:10px}.answer{border:1px solid #e3b4ca;background:white;padding:14px 16px;border-radius:14px;text-align:left;font:14px Arial,sans-serif;color:var(--ink);cursor:pointer}.answer:hover,.answer.selected{background:var(--navy);color:white;border-color:var(--navy)}.quiz-actions{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:20px}.progress{font:12px Arial,sans-serif;color:#75546a}.result{display:none;text-align:center;padding:24px}.result h3{font-size:30px;color:var(--navy)}footer{text-align:center;padding:38px 20px;background:var(--navy);color:#f5ddeb;font:13px Arial,sans-serif}footer span{color:var(--pink)}
@media(max-width:500px){section{padding:58px 16px}.time{min-width:72px}.time strong{font-size:25px}}
</style>
</head>
<body>
<header>
 <div class="hero">
  <div class="eyebrow">a little place made just for you</div>
  <div class="heart">♡</div>
  <h1>Jojo's<br>Little World</h1>
  <p>Some people make ordinary days feel a little more special. This tiny corner of the internet is a reminder that you are one of them.</p>
  <a class="btn" href="#letter">Open your little surprise</a>
  <a class="btn secondary" href="#memories">Our memories</a>
 </div>
</header>
<section id="letter">
 <div class="section-kicker">a note for you</div><h2 class="section-title">A little reminder ♡</h2>
 <div class="letter">
  <p>Dear Jojo,</p>
  <p>I hope this new year of your life brings you a thousand reasons to smile, people who understand your quiet moments, and memories that stay beautiful for years.</p>
  <p>Keep being your own kind of wonderful. I hope you get to try new things, discover places you love, and collect moments that make you genuinely happy.</p>
  <p>No pressure and no big speech — just a small reminder that I'm really glad we know each other. You deserve good days, kind people, and all the little things that make life feel lighter.</p>
  <p class="signature">Happy Birthday, Jojo. ♡</p>
  <p>— Adam</p>
 </div>
</section>
<section>
 <div class="count-wrap"><div class="section-kicker" style="color:#ffc9e0">save the date</div><h2 class="section-title" style="color:white;margin-bottom:8px">The countdown to your day</h2><div style="font:14px Arial,sans-serif;color:#e8dce8">March 22, 2027</div>
  <div class="countdown" id="countdown"><div class="time"><strong>—</strong><span>Days</span></div><div class="time"><strong>—</strong><span>Hours</span></div><div class="time"><strong>—</strong><span>Minutes</span></div><div class="time"><strong>—</strong><span>Seconds</span></div></div>
 </div>
</section>
<section id="memories">
 <div class="section-kicker">little moments</div><h2 class="section-title">A place for our memories</h2>
 <p style="text-align:center;font:14px/1.7 Arial,sans-serif;color:#68708a;margin:-12px auto 26px">Add your favourite photos here. Tap any frame to choose a picture from your device.</p>
 <div class="gallery">
  <label class="photo"><span>♡<br><br>Add a favourite memory</span><input type="file" accept="image/*" onchange="addPhoto(this)"></label>
  <label class="photo"><span>♡<br><br>A moment worth keeping</span><input type="file" accept="image/*" onchange="addPhoto(this)"></label>
  <label class="photo"><span>♡<br><br>One more little memory</span><input type="file" accept="image/*" onchange="addPhoto(this)"></label>
 </div>
</section>
<section id="quiz">
 <div class="section-kicker">just for fun</div><h2 class="section-title">The Jojo quiz</h2>
 <div class="quiz">
  <div id="quizArea">
   <div class="progress" id="progress">Question 1 of 5</div>
   <div class="question" id="question"></div><div class="answers" id="answers"></div>
   <div class="quiz-actions"><span class="progress">Choose what feels most like you</span><button class="btn" id="next" disabled>Next →</button></div>
  </div>
  <div class="result" id="result"><div class="heart">♡</div><h3>That's so you!</h3><p id="resultText" style="font:15px/1.8 Arial,sans-serif"></p><button class="btn" onclick="restartQuiz()">Play again</button></div>
 </div>
</section>
<footer>Made with <span>♡</span> and care by Adam</footer>
<script>
const target=new Date('2027-03-22T00:00:00');
function tick(){let d=Math.max(0,target-new Date()),vals=[Math.floor(d/86400000),Math.floor(d/3600000)%24,Math.floor(d/60000)%60,Math.floor(d/1000)%60],names=['Days','Hours','Minutes','Seconds'];document.getElementById('countdown').innerHTML=vals.map((v,i)=>`<div class="time"><strong>${v}</strong><span>${names[i]}</span></div>`).join('')}
tick();setInterval(tick,1000);
function addPhoto(input){if(!input.files||!input.files[0])return;const box=input.parentElement;let img=box.querySelector('img');if(!img){img=document.createElement('img');box.appendChild(img)}img.src=URL.createObjectURL(input.files[0]);box.querySelector('span').style.display='none'}
const qs=[
 ['Your perfect free evening?', ['Music, snacks and relaxing','A little café and good conversations','Going somewhere new','A cosy night with a favourite show']],
 ['What kind of gift feels most special?', ['Something handmade just for me','Something thoughtful and useful','A surprise experience','A handwritten note']],
 ['Pick a colour for your mood today:', ['Pink','Navy blue','Black','A little bit of everything']],
 ['When you need a reset, you prefer…', ['Quiet time by myself','Talking to someone I trust','A walk and fresh air','Music and daydreaming']],
 ['One wish for your next year:', ['More happy memories','New places and experiences','Peace and confidence','Good people around me']]
];let index=0,chosen=[];
function render(){document.getElementById('progress').textContent=`Question ${index+1} of ${qs.length}`;document.getElementById('question').textContent=qs[index][0];document.getElementById('answers').innerHTML=qs[index][1].map((a,i)=>`<button class="answer ${chosen[index]===i?'selected':''}" onclick="pick(${i})">${a}</button>`).join('');document.getElementById('next').disabled=chosen[index]===undefined;document.getElementById('next').textContent=index===qs.length-1?'See my result ♡':'Next →'}
function pick(i){chosen[index]=i;render()}
document.getElementById('next').onclick=()=>{if(chosen[index]===undefined)return;if(index<qs.length-1){index++;render()}else{document.getElementById('quizArea').style.display='none';document.getElementById('result').style.display='block';let words=['thoughtful','curious','calm','full of surprises'];let score=chosen.reduce((a,b)=>a+b,0);document.getElementById('resultText').textContent=`Your answers say you're ${words[score%words.length]} in your own way. Keep discovering what makes you happy — your next chapter is yours to write. ♡`}};
function restartQuiz(){index=0;chosen=[];document.getElementById('quizArea').style.display='block';document.getElementById('result').style.display='none';render()}render();
</script>
</body></html>'''
path = Path("/mnt/data/index.html")
path.write_text(html, encoding="utf-8")
print(f"Created {path} ({path.stat().st_size} bytes)")
