const lessonsUlRef = document.querySelector("#lessons");
const lessons = ["Piano","Guitar","Violin","Drums","Saxophone","Flute"];


console.table(lessons)
for (let index = 0; index < lessons.length; index++) {
    const lesson = lessons[index];
    console.log(lesson);
    lessonsUlRef.innerHTML +="<li>"+ lesson +"</li>"

}