const router = require('express').Router()
const { RepairOrder } = require('../../models')

// GET all RO's
router.get('/', (req, res) => {
    RepairOrder.findAll()
      .then(dbRoData => res.json(dbRoData))
      .catch( err => {
          res.status(500).json(err)
      })
})

// GET RO's by ID
router.get('/:id', (req, res) => {
    RepairOrder.findOne({
        where: {
            id: req.params.id
        }
    })
      .then(dbRoData => res.json(dbRoData))
      .catch(err => {
          res.status(500).json(err)
        });
});

// POST new RO
router.post('/', (req, res) => {
    //  expects { roNumber: INT, customerName, String, invocieDate: String, totalSale: Integer, toalRec: int, closingRatio: INteger, advisor: String, leadType: string}
    RepairOrder.create({
       roNumber: req.body.roNumber,
       customerName: req.body.customerName,
       invoiceDate: req.body.invoiceDate,
       totalSale: req.body.totalSale,
       totalRec: req.body.totalRec,
       closingRatio: req.body.closingRatio,
       advisor: req.body.advisor,
       leadType: req.body.leadType
    })
      .then(dbRoData => res.json(dbRoData))
      .catch(err => res.status(500).json(err))
})

//  PUT/Update RO
router.put('/:', (req, res) => {
    RepairOrder.update(req.body, {
        where : {
            id: req.params.id
        }
    })
      .then(dbRoData => {
          if(!dbRoData[0]) {
              res.status(404).json("no RO found with this id")
              return;
            } else return res.json(dbRoData)
      })
      .catch(err => {
          console.log(err)
          res.status(500).json(err)
      })
})

// DELETE RO
router.delete('/:id', (req, res) => {
    RepairOrder.destroy({
        where: {
            id: req.params.id
        }
    })
      .then(dbRoData => {
          if(!dbRoData) {
              res.status(404).json("no RO found with this ID")
              return
            } else return res.json(dbRoData)
        })
      .catch(err => {
          console.log(err)
          res.status(500).json(err)
      })
})

module.exports = router