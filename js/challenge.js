document.addEventListener("DOMContentLoaded", () => {
  timer
});

//QuerySelectors
let counter = document.querySelector("#counter");
let counterNum = counter.innerText;
let counterInt = parseInt(counterNum);

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");

const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");

const submit = document.querySelector("#submit");
const form = document.querySelector("form")
const list = document.querySelector("#list");

const buttons = document.querySelectorAll("button");

//Callbacks
const incrementor = () => {counter.innerText = counterInt++};
const decrementor = () => {counter.innerText = counterInt--};

let timer = setInterval(incrementor, 1000);

const liker = () => {
  const likes = document.querySelector(".likes");
  const li = document.createElement("li");
  li.innerText = `${counterInt} has been liked 1 time`;
  likes.appendChild(li);
}

let playing = false

const resumeCounter = () => {
  for(const btn of buttons) {
    if (btn == pause) {
      btn.innerText = " pause "
      btn.disabled = false
    }
    else {
      btn.disabled = false
    }
  }
  playing = false
  timer = setInterval(incrementor, 1000);
};

const pauseCounter = () => {
  for(const btn of buttons) {
    if (btn == pause) {
      btn.innerText = " resume "
      btn.disabled = false
    }
    else {
      btn.disabled = true
    }
  }
  playing = true
  clearInterval(timer)
};

const playingCounter = () => {
  if (playing) {
    resumeCounter()
  }
  else pauseCounter()
}


const submitComment = (e) => {
  e.preventDefault();
  buildComment(e.target["comment-input"].value)
  form.reset()
}
const buildComment = (comment) => {
  const p = document.createElement("p");
  p.innerText = comment;
  list.appendChild(p);
}

//EventListeners
minus.addEventListener("click", decrementor)

plus.addEventListener("click", incrementor)

heart.addEventListener("click", liker)

pause.addEventListener("click", playingCounter)

form.addEventListener("submit", submitComment)
