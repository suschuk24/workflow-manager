const router = require('express').Router()
const { User } = require('../../models')

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
          console.log(err)
          res.status(500).json(err)
      })
})

// get by id
router.get("/:id", (req, res) => {
    User.findOne( {
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// create user
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update user
router.put('/:id', (req, res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// delete user
router.delete('/:id', (req, res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router