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
    console.log("req is")
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

  app.get('/update', (req, res) => {
    res.redirect('/')
  })

  app.get('/delete', (req, res) => {
    res.send("This is delete")
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