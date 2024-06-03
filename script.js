var data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

let average = parseInt(
  (data[0].score + data[1].score + data[2].score + data[3].score) / 4
);
document.getElementById("average").innerHTML = average;

// map to html
data.map((data) => {
  document.getElementById("category").innerHTML += `
  <div class="${getClassByCategory(data.category)}">
    <div style="display: flex; flex-direction: row; gap:5px">    
      <img src="${data.icon}" alt="icon"/>
      <p>${data.category}</p>
    </div>
    <div id='div_s'>
      <span id='s_id'>${data.score}</span>
      <span>/ 100</span>
    </div>
  </div>
  `;
});

function getClassByCategory(category) {
  switch (category) {
    case "Reaction":
      return "reaction";
    case "Memory":
      return "memory";
    case "Verbal":
      return "verbal";
    case "Visual":
      return "visual";
  }
}
