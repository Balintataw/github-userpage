var express = require('express');
var router = express.Router();
var apiURL = 'http://api.github.com/users/'
var request = require('request')

/* GET home page. */

router.get('/:login', function(req, res, next) {
  const options = {
    url: apiURL + req.params.login,
    headers: {
      'User-Agent': req.params.login
    }
  }

  console.log(options)

  request.get(options, (err, resp, body) => {
    res.json(JSON.parse(body))
  })
})

// router.get('/:login/repos', function(req, res, next) {
//   const options = {
//     url: apiURL + req.params.login,
//     headers: {
//       'User-Agent': req.params.login
//     }
//   }

//   console.log(options)

//   request.get(options, (err, resp, body) => {
//     res.json(JSON.parse(body))
//   })
// })
// router.get('/user', function(req, res, next) {
//   request(apiURL, resp => {
//     console.log(resp)
//     res.json({
//       'all':'good'
//     })
//   })
// })

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res, next) {
//   res.json({
//     'working2': "yes"
//   })
// })

// router.get('/user', function(req, res, next) {
//   var userName = req.query.userName
//   res.json({
//     userName: userName
//   })
// })

// router.get('/use/:jerks', function(req, res, next) {
//   var losers = req.params.jerks
//   res.json({
//     total: losers
//   })
// })

// router.post('/', function(req,res,next) {
//   req.body.myparam
// })

module.exports = router;
