const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Data = require('../models/Data');

// @route   GET api/data
// @desc    Get all data for the user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const data = await Data.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/data
// @desc    Create new data
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const newData = new Data({
            title: req.body.title,
            description: req.body.description,
            user: req.user.id
        });

        const data = await newData.save();
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/data/:id
// @desc    Update data
// @access  Private
router.put('/:id', auth, async (req, res) => {
    try {
        let data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ msg: 'Data not found' });
        }

        // Make sure user owns the data
        if (data.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        data = await Data.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/data/:id
// @desc    Delete data
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ msg: 'Data not found' });
        }

        // Make sure user owns the data
        if (data.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await data.remove();
        res.json({ msg: 'Data removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router; 