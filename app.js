const questions = [{
    'ques': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'Javascript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'ques': 'What is the smallest header in HTML by default?',
    'a': 'h1',
    'b': 'h2',
    'c': 'h6',
    'd': 'h4',
    'correct': 'c'
},
{
    'ques': 'The full form of CSS is:',
    'a': 'Cascading Style Sheets',
    'b': 'Coloured Special Sheets',
    'c': 'Color and Style Sheets',
    'd': 'None of the above',
    'correct': 'a'
},
{
    'ques': 'In how many ways can CSS be written in?',
    'a': '1',
    'b': '3',
    'c': '5',
    'd': '4',
    'correct': 'b'
},
{
    'ques': "Which of the following keywords is used to define a variable in Javascript?",
    'a': "var",
    'b': "let",
    'c': "Both a and b",
    'd': "None of the above",
    'correct': "c"
}
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = questions[index]
    // console.log(data)
    quesBox.innerText = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer= input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked=false;
        }
    )
}

const quizEnd=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for playing quiz</h3>
    <h2>${right}/${total} are correct</h2>`
}

//intial call
loadQuestion();
