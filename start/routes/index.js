var express = require('express');
var router = express.Router();
var fs = require('fs');

var path = './public/Posts';


// 여기서는 Home을
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('Home', { title: 'Interaction_practice' });

});

///showPost/PostDetail/:ClassID/
//var classID = req.params.ClassID;
// render에다가 ClassID에서 추출된 값 그냥 +로 붙여버리면 될 듯 (어차피 string이니까)


//여기서 번호 준다음에, 페이지로 넘기면 되겠네
router.get('/:number', function(req,res,next){

    var pageID = req.params.number;
    res.render('index'+ pageID,{ title:'Interaction_practice'})
})

router.post('/', function(req,res,next){

    var pageID = req.body.number;

    res.render('index'+ pageID,{ title:'Interaction_practice'})
})



module.exports = router;
