// let userName = 'Moises';

// userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

// let userQuestion = 'Will I adopt?';

// console.log(`${userName} has asked - ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);

// let eightBall = '';

// switch(randomNumber) {
//     case 0:
//         eightBall = 'It is certain.';
//         break;
//     case 1:
//         eightBall = 'It is decidely so.';
//         break;
//     case 2:
//         eightBall = 'Reply Hazy try again.';
//         break;
//     case 3:
//         eightBall = 'Cannot predict now.';
//         break;
//     case 4:
//         eightBall = 'Signs point to yes.';
//         break;
//     case 5:
//         eightBall = 'Do not count on it.';
//         break;
//     case 6:
//         eightBall = 'My Sources say no.';
//         break;
//     case 7:
//         eightBall = 'Outlook not so good.';
//         break;
// }

// console.log(`The Magic 8 Ball says, ${eightBall}.`)



// let questions = [];

// const generateQuestion = (ev)=>{
//     ev.preventDefault();
//     let question = {
//         name: document.getElementById('name').value,
//         question: document.getElementById('question').value
//     }
//     questions.push(question);
//     document.forms[0].reset();
//     // Display entries
//     console.warn('added' , {questions});
//     let pre = document.querySelector('#msg pre');
//     pre.textContent = '\n' + JSON.stringify(questions, '\t', 2);

//     console.log(questions)
// } 


// document.addEventListener( 'DOMContentLoaded', () => {
//     document.getElementById('btn').addEventListener('click', generateQuestion);
// });

function check () {
    document.getElementById('f1').innerHTML= document.getElementById('name').value + ' asked, ' + document.getElementById('question').value;
}

const eightBall = document.getElementById('eightball');

imageArray = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png'
]

function getRandomImage(){
    randomIndex = Math.floor(Math.random()* imageArray.length);
    selectedImage = imageArray[randomIndex];
    // check the time out thing
    document.getElementById('eightball').src = `./img/${selectedImage}`;
    eightBall.classList.toggle('fade');
}
