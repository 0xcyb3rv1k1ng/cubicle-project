var express = require("express");
var router = express.Router();
const Cube = require("../models/cube");

/* GET details page for selected cube. */
router.get('/:uid', function (req, res, next) {
    let id = req.params.uid;

    Cube.findOne({_id: id }) 
        .then((thisCube) => {
            res.render('deleteCube', {
                title: 'Delete Cube',
                cube: thisCube
            });
        });
});

/*DELETE*/
router.post("/:uid", function (req, res, next) {
    let selectedCubeId = req.params.uid;
    console.log('deleting this', selectedCubeId);    

    Cube.deleteOne(
        { _id: selectedCubeId }
        
    )
    .then(()=> {
        console.log('deleted', selectedCubeId);
    })  
    .catch(err => { console.log(err);});
    res.redirect('/');

});

module.exports = router;