
const scaleText = ["Strongly disagree","Disagree","Neutral","Agree","Strongly agree"];
document.querySelectorAll(".scale").forEach(group => {
  scaleText.forEach((label, i) => {
    const name = group.dataset.name;
    const id = `${name}-${i+1}`;
    group.insertAdjacentHTML("beforeend",
      `<label for="${id}"><input id="${id}" type="radio" name="${name}" value="${i+1}" required> ${i+1}</label>`);
  });
});
document.getElementById("diagnostic").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const vals = ["q1","q2","q3","q4","q5"].map(q => Number(data.get(q)));
  const avg = vals.reduce((a,b)=>a+b,0)/vals.length;
  let stage, note;
  if(avg < 2){stage="Early Adoption";note="Focus on access, confidence, basic capability and safe experimentation."}
  else if(avg < 3){stage="Active Adoption";note="Build repeatable use cases, peer learning and stronger leadership reinforcement."}
  else if(avg < 4){stage="Late Adoption";note="Shift attention toward workflow redesign, governance consistency and measurable business outcomes."}
  else{stage="Transformation-ready";note="Use the strong foundations to question which workflows, decisions and operating practices should change because AI exists."}
  const result = document.getElementById("result");
  result.innerHTML = `<strong>Indicative stage: ${stage}</strong><p>${note}</p><small>Prototype result based on five questions; this is not a validated assessment.</small>`;
  result.classList.add("show");
  result.scrollIntoView({behavior:"smooth", block:"nearest"});
});
