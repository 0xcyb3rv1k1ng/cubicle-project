var express = require("express");
var router = express.Router();
const Cube = require("../models/cube");

/* GET details page for selected cube. */
router.get('/:id', function (req, res, next) {
    let id = req.params.id;

    Cube.findOne({ _id: id}).populate('accessories') 
        .then((thisCube) => {
            res.render('editCube', {
                title: 'Edit Cube',
                cube: thisCube
            });
        });
});

// POST
router.post("/:id", function (req, res, next) {
    Cube.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: req.body.difficultyLevel,
        }
        
        
    )
    .catch(err => { console.log(err);});

    res.redirect('/');
});

module.exports = router;