const exams = document.getElementsByClassName('exams');
const output = document.getElementById('exam');

selectRandomExam();

function selectRandomExam() {
    const randExam = exams[randInt(0, exams.length - 1)];
    output.innerHTML = randExam.innerHTML;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

