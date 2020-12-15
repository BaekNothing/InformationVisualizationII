var express = require('express');
var router = express.Router();
var fs = require('fs');
const csv = require('csv-parser');

var path = './public/Posts';


// 여기서는 Home을
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('Home', { title: 'Sloped_News_Title' });

});

///showPost/PostDetail/:ClassID/
//var classID = req.params.ClassID;
// render에다가 ClassID에서 추출된 값 그냥 +로 붙여버리면 될 듯 (어차피 string이니까)

/* legacy
//여기서 번호 준다음에, 페이지로 넘기면 되겠네
router.get('/:number', function(req,res,next){

    var pageID = req.params.number;
    res.render('index'+ pageID,{ title:'Sloped_News_Title'})
})
*/

router.post('/', function(req,res,next){

    var pageID = req.body.number;

    var pageData = [];

    if (pageID == 1){
      res.render('index'+ pageID,{ title:'Sloped_News_Title'})
    }

    if (pageID == 2){
      console.log('move1');
      res.render('index'+ pageID,{ title:'Sloped_News_Title', pageData: murderCSV})
    }
    else if (pageID == 3){
      console.log('move2');
      res.render('index'+ pageID,{ title:'Sloped_News_Title', pageData: violenceCSV})
    }
    else if (pageID == 4){
      console.log('move3');
      res.render('index'+ pageID,{ title:'Sloped_News_Title', pageData: sexualAssaultCSV})
    }
})



var inputFilePathMurder = './public/Posts/Murder.csv';

var murderCSV = [];

fs.createReadStream(inputFilePathMurder)
.pipe(csv())
.on('data', function(data){
    try {

        /*
        console.log("date is: "+data.date);
        console.log("office is: "+data.office);
        console.log("title is: "+data.title);
        console.log("attacker is: "+data.attacker);
        console.log("advantage is: "+data.advantage);
        console.log("Evaluated is: "+data.Evaluated);
        console.log("namming is: "+data.namming);
        console.log("partiality is: "+data.partiality);
        console.log("Sum is: "+data.Sum);
        console.log("URL is: "+data.URL);
        */

        //console.log(data);
        murderCSV.push(data);

    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){

    console.log('MurderDone');
    console.log(murderCSV[0]['title']);
    //some final operation
});


var inputFilePathViolence = './public/Posts/Violence.csv';

var violenceCSV = [];

fs.createReadStream(inputFilePathViolence)
.pipe(csv())
.on('data', function(data){
    try {
        //console.log(data);
        violenceCSV.push(data);
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){

    console.log('ViolenceDone');
    //some final operation
});


var inputFilePathSexualAssault = './public/Posts/SexualAssault.csv';

var sexualAssaultCSV = [];

fs.createReadStream(inputFilePathSexualAssault)
.pipe(csv())
.on('data', function(data){
    try {
        //console.log(data);
        sexualAssaultCSV.push(data);
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){

    console.log('SexualAssaultDone');
    //some final operation
});

module.exports = router;
