let musicDuration = 163;
let musicCurrentTime = 0;
const musicCurrentTimeEl = document.getElementById("music-currentTime");
const musicRemainingTimeEl = document.getElementById("music-remainingTime");
const musicProgressBar = document.querySelector(".music-progress");

function updateMusicTime() {
  if (musicCurrentTime > musicDuration) {
    musicCurrentTime = 0;
  }
  let minutes = Math.floor(musicCurrentTime / 60);
  let seconds = musicCurrentTime % 60;
  musicCurrentTimeEl.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
  let remaining = musicDuration - musicCurrentTime;
  let remMinutes = Math.floor(remaining / 60);
  let remSeconds = remaining % 60;
  musicRemainingTimeEl.textContent = `-${remMinutes}:${remSeconds
    .toString()
    .padStart(2, "0")}`;
  musicProgressBar.style.width = `${(musicCurrentTime / musicDuration) * 100}%`;
  musicCurrentTime++;
}
setInterval(updateMusicTime, 1000);

function openModal(iconNumber) {
  const modalContent = {
    1: {
      img: "./image/baby.jpg",
      title: "안녕하세요,\n황윤희입니다",
      desc: "1999년 3월 23일에 태어나\n열심히 살아가고 있는\n지극히 평범한 사람입니다 \n\n٩(  ˙༥˙  )و",
    },
    2: {
      img: "./image/halmal.jpg",
      title: "너를 알게 된 건\n크나 큰 행운이야",
      desc: "여기까지 눌러 본 당신!\n호기심이 많은 사람이군요?\n\n(´ゝз・`)ﾉ⌒☆",
    },
    3: {
      img: "./image/talisman.jpg",
      title: "행 운 바 다 ",
      desc: "이 글을 보고있는 당신께 행복한 일만 가득하길 바랍니다\n\nଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚",
    },
    4: {
      img: "./image/portugal.jpg",
      title: " 돈 많은 백수가 \n꿈입니다",
      desc: " ˚₊ ෆ꒰◍ᐡᐤᐡ◍꒱",
    },
    5: {
      img: "./image/soccer.jpg",
      title: "축구 좋아하시나요?",
      desc: "아니라면 저와 함께 첼시를\n응원해보는 건 어떨까요?\n\n답답하지만 나름 열심히 뛰어요\n(ง ˙o˙)ว(ง ˙o˙)ว",
    },
  };

  document.getElementById("modal-img").src = modalContent[iconNumber].img;
  document.getElementById("modal-title").innerText =
    modalContent[iconNumber].title;
  document.getElementById("modal-description").innerText =
    modalContent[iconNumber].desc;

  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  document.getElementById("clock").textContent = `${formattedHours}:${minutes}`;
  document.getElementById("ampm").textContent = ampm;

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  document.getElementById("date").textContent = `${day} ${month} ${date}`;
}
setInterval(updateClock, 1000);
updateClock();
