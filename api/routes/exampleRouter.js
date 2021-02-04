const {  Router  } = require('express')
const exampleController = require('../controllers/exampleController')

const router = Router()

// Get all examples
router.get('/', exampleController.getAll)

// Get one specific example by id
router.get('/:id', exampleController.getOne)

// Create a new example
router.post('/', exampleController.create)

// Update example
router.put('/:id', exampleController.update)

// Delete example
router.delete('/:id', exampleController.delete)

module.exports = router
