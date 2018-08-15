const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
//const mongoose = require('./db/schema')
// const mongoose = require("./db/connection")
// const Conditions = mongoose.model('./db/model')
const mongoose = require('./db/schema.js')
const Conditions = mongoose.model('Conditions')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("This is a test")
  })

//   app.get('/show', (req, res) => {
//     res.send("This is show")
//   })

  app.post('/create', (req, res) => {
    console.log("This is in /create route")
    console.log("req.body is")
    console.log(req.body)
    Conditions.create(req.body)
      .then(data => {
          data.save(err => {
            console.log(err);
            res.redirect("/show");
        })
      })
    // Conditions.create(req.body.create)
    //   .then(data => {
    //     console.log(data)
    //     res.json(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // res.redirect('/show')
  })

  app.put('/update', (req, res) => {
        // var id = req.params.id;
        // console.log("The ID is...")
        // console.log(id);
        console.log("This is in /update route")
        console.log("req.body is")
        console.log(req.body)
        Conditions.findOne()
        .then(data => {
          data.condition = req.body.condition;
          console.log("req.body.condition is")
          console.log(req.body.condition)
            // doc.sport = req.body.sport;
            // doc.description = req.body.description;
            // doc.skeleton = req.body.skeleton;
          data.save();
          res.redirect('/show');
        })
    })

  app.delete('/delete', (req, res) => {
    console.log("In delete route")
    Conditions.deleteOne(req.body)
        .then(data => {
            res.redirect('/show');
        })
  })

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  
  app.get('/show', (req, res) => {
    Conditions.find({})
      .then(data => {
        console.log(data)
        res.json(data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

// app.get('/api/translations', (req, res) => {
//   Translation.find()
//     .then((translations) => {
//       res.json(translations)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.post('/api/translations', (req, res) => {
//   Translation.create(req.body)
//     .then((translation) => {
//       res.json(translation)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/api/translations/:id', (req, res) => {
//   Translation.findById(req.params.id)
//     .then((translation) => {
//       res.json(translation)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
