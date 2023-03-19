const _ = require('lodash')
const express = require('express');
const { Category, validate } = require('../model/Category.model')
//Creating a Router
var router = express.Router();

//get items
router.get('/', async (req, res) => {
    const items = await Category.find().sort({ name: 1 });

    return res.send(items)
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.send(error.details[0]
        .message).status(400)

    let item = await Category.findOne({ name: req.body.name })
    if (user) return res.
        send({ error: 'item already registered' }).status(400)

    item = new Category(_.pick(req.body, ['name', 'description']))
    await item.save()

    return res.send(_.pick(item, ['_id', 'name', 'description'])).status(201)
});

module.exports = router;
