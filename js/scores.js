const scoresUlRef = document.querySelector("#scores");
const scores = ["95","72","88","45","60","79","82","91","50","38"];


for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    console.log(score);
    scoresUlRef.innerHTML +="<li>"+ score + "</li>"
    
}
const AvescoresPRef = document.querySelector("#Avescores");
const Avescores = [700/10]
console.log (Avescores);
AvescoresPRef.innerHTML +="<li>"+ Avescores + "</li>"
    

    