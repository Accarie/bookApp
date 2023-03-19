const _ = require('lodash')
const express = require('express');
const { Item, validate } = require('../model/Item.model')
//Creating a Router
var router = express.Router();

//get items
router.get('/', async (req, res) => {
    const items = await Item.find().sort({ name: 1 });

    return res.send(items)
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.send(error.details[0]
        .message).status(400)

    let item = await Item.findOne({ name: req.body.name })
    if (user) return res.
        send({ error: 'item already registered' }).status(400)

    item = new Item(_.pick(req.body, ['name', 'description']))
    await item.save()

    return res.send(_.pick(item, ['_id', 'name', 'description'])).status(201)
});

module.exports = router;
