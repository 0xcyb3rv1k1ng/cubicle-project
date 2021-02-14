var express = require('express');
var router = express.Router();
const Cube = require('../models/cube');

/* GET details page for selected cube. */
router.get('/:uid', function (req, res, next) {
    let id = req.params.uid; 
    console.log("this is req", req);

    Cube.findOne({ _id: id }).populate('accessories')
        .then((thisCube) => {
            res.render('details', { title: 'Cubicle', 
                cube: thisCube, 
                accessories: thisCube.accessories
            });
        });
});

module.exports = router;