//Hard coded images copied into img folder
//[img, correct Answer #, Option 1, Option 2, Option 3, Option 4]
var questions = [
	['img/car_1.jpg', '1', "Bugatti Veyron", "Ferrari Scuderia", "Alfa Romeo Vigilante", "Subaru Forester WRX"]
    
    , ['img/car_2.jpg', '2', "BMW e30 M3", "BMW M4", "BMW 640i M Package", "Audi RS2.5"]
    
    , ['img/car_3.jpg', '1', "Ferrari LaFerrari", "Ferrari 430 Scuderia", "Ferrari GT250", "Lambroghini R34"]

    , ['img/car_4.jpg', '4', "Mercedez SL550 AMG", "McLaren P1", "Mclaren 650LT", "McLaren 12C"]

    , ['img/car_5.jpg', '4', "Subaru Widebody GC8", "Lexus LFA", "Rocket Bunny FRS", "Nissan GTR"]

    , ['img/car_6.jpg', '1', "Lamborghini Huracan", "Lamborghini Aventador", "Maserati Ghibli", "Lamborghini XC90"]

    , ['img/car_7.jpg', '3', "BMW e60 M5", "BMW M6", "BMW F10", "BMW R8 Sti"]

    , ['img/car_8.jpg', '3', "Lamborghini Reventon", "Pagani Scaglieti", "Pagani Huayra", "Pagani Cince Roadster"]
    
    , ['img/car_9.jpg', '1', "Ferrari 458 Roadster", "Ferrari 488", "Ferrari 458 Coupe", "Ferrari 599GTO"]

    , ['img/car_10.jpg', '4', "Mitsubishi Evoltion MR", "Ford Escort", "2004 Subaru WRX", "2006 Subaru WRX"] // Note: no comma after last entry
];

var qNo = 0;
var correct = 0;
var cnt = 0;
var corectAnswer = 0;
var answer = '';

function NextQuestion(response) {
    correctAnswer = questions[qNo][1];
    var temp = parseInt(correctAnswer, 10) + 1;
    
    answer = questions[qNo][temp];
    
    document.getElementById('answer').innerHTML = answer;     
    
    if ((qNo < questions.length) && (response == correctAnswer)) {
        correct++;
    }
    qNo++;
    if (qNo < questions.length) {
        document.getElementById('Pic').src = questions[qNo][0];
        cnt++;
        UpdateOptions();
    } else {
        //Quiz is finished
        //Remove Button and Image Elements
        
        finishModal(correct, qNo);
    }
}

function UpdateOptions() {
    document.getElementById('qNo').innerHTML = 'Question ' + (qNo + 1) + ' out of ' + (questions.length);
    document.getElementById('opt1').innerHTML = questions[qNo][2];
    document.getElementById('opt2').innerHTML = questions[qNo][3];
    document.getElementById('opt3').innerHTML = questions[qNo][4];
    document.getElementById('opt4').innerHTML = questions[qNo][5];
}

function randOrd() {
    return (Math.round(Math.random()) - 0.5);
}

function calculateOpinion(correct, total){
    var frac = (correct/total);
    var lowerThreshold = 0.10;
    var threshold = 0.50;
    var upperThreshold = 0.90;
    
    if(correct == 0 && total > 0){
        return('Are you kidding me? Not even a single one correct');
    }
    
    if((frac <= threshold) && frac > lowerThreshold){
        return ('How about you study up on your cars...');
    }
    if(frac >= threshold && frac < upperThreshold){
        return ('Maybe this test was a little too easy.');
    }
    if(frac >= upperThreshold){
        return ("Oh you must think you're cool now. Great Job!");
    }
}

function finishModal(correctScore, totalQuestions) {
    $('#myModal').modal('show');
    $(".modal-body").text('You got ' + correctScore + ' out of ' + totalQuestions);
    $(".modal-body-2").text(calculateOpinion(correctScore, totalQuestions));

    ev.preventDefault();
}

onload = function () {
    questions = questions.sort(randOrd);
    document.getElementById('Pic').src = questions[0][0];
    UpdateOptions();
}