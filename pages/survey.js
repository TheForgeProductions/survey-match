// const matcher = require('./matcher');
// const friends = require('/data/friends');
const friends = [
    {
        "name": "dude1",
        "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gq-magazine.co.uk%2Fphotos%2F5d13a04bb744d364a425653b%2F16%3A9%2Fw_1920%2Cc_limit%2FThe-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg&f=1&nofb=1",
        "scores": [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "dude2",
        "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbamfstyle.files.wordpress.com%2F2016%2F04%2Fdude6-main.jpg&f=1&nofb=1",
        "scores": [
            5,
            1,
            3,
            4,
            2,
            2,
            5,
            1,
            3,
            4
        ]
    },
    {
        "name": "dude3",
        "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure.i.telegraph.co.uk%2Fmultimedia%2Farchive%2F03439%2Fdude6_3439641b.jpg&f=1&nofb=1",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        "name": "dude4",
        "photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F71%2F41%2Ffc%2F7141fc049eee4295af410c5b8642c043.jpg&f=1&nofb=1",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
];

const matcher = (req) => {
    var totalDifference = 50;
    var lowest = 40;
    var bestMatch = friends[0];
    for (let i = friends.length - 1; i >= 0; i--) {
        totalDifference = Math.abs(req[0] - friends[i].scores[0]) + Math.abs(req[1] - friends[i].scores[1]) + Math.abs(req[2] - friends[i].scores[2]) + Math.abs(req[3] - friends[i].scores[3]) + Math.abs(req[4] - friends[i].scores[4]) + Math.abs(req[5] - friends[i].scores[5]) + Math.abs(req[6] - friends[i].scores[6]) + Math.abs(req[7] - friends[i].scores[7]) + Math.abs(req[8] - friends[i].scores[8]) + Math.abs(req[9] - friends[i].scores[9]);
        console.log(totalDifference);
        if (totalDifference < lowest) {
            lowest = totalDifference;
            bestMatch = friends[i];
            i++;
        }
    }
    return bestMatch;
}

var questionCount = 1;
var answers = [];
const question = document.getElementById('question');
const submit = document.getElementById('submit');

question.innerHTML = `Question ${questionCount}`;
submit.innerHTML = 'Submit';
submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (questionCount < 10) {
        answers.push($('input[name="answers"]:checked').val());
        questionCount += 1;
        question.innerHTML = `Question ${questionCount}`;
        $('input[name="answers"]').attr('checked', false);
        console.log(answers);
    }
    else {
        answers.push($('input[name="answers"]:checked').val());
        questionCount += 1;
        console.log(answers);
        question.innerHTML = "Submit to Find Match!";
        let matched = matcher(answers);
        console.log(matched)
        $('#modal-body').html(`
                <p>Name: ${matched.name}</p>
                <img width='200px' src='${matched.photo}'>`)
            ;
        submit.outerHTML = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Find Match</button>';
    };
    console.log(questionCount);
});
