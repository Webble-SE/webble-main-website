const Example = require('../models/Example')

const exampleController = {}

// Get all examples
exampleController.getAll = async (req, res) => {
  try {
    const examples = await Example.findAll()
    return res.json(examples)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
}

// Get one specific example by id
exampleController.getOne = async (req, res) => {
    const { id } = req.params
    try {
      return res.json(await Example.findOne({ where: { id } }))
    } catch (err) {
      console.error(err)
      res.status(400).send(err)
    }
  }

// Create a new example
exampleController.create = async (req, res) => {
  try {
    const example = await Example.create({
      title: req.body.title,
      description: req.body.description
    })
    return res.json(example)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
}

// Update example
exampleController.update = async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    try {
      const  example = await  Example.findOne({ where: { id } })
      // TODO: Ok to throw errors?
      if (!example) {
        throw new Error('Error: No example with id')
      }
      example.setDataValue('title', title)
      example.setDataValue('description', description)
      await example.save()
      return res.json(example)
    } catch (err) {
      console.error(err)
      res.status(400).send(err)
    }
  }

// Delete example
exampleController.delete = async (req, res) => {
  const { id } = req.params
  try {
    const example = await Example.findOne({ where: { id } })
    // TODO: Ok to throw errors?
    if (! example) {
      throw new Error('Error: No example with id')
    }
    await  example.destroy()
    return res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
}

module.exports = exampleController
