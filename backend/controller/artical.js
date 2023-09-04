const ARTICAL = require('../model/articalModel')


//creat a artical
exports.createArtical = async (req, res, next) => {
    try {
        const artical = await ARTICAL.create(req.body)
        res.status(201).json({
            sucess: "true",
            artical
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the artical",
            error: error.message
        });
    }
}


//update artical
exports.updateArtical = async (req, res, next) => {
    try {
        let artical = await ARTICAL.findById(req.params.id)
        if (!artical) {
            res.status(404).json({
                sucess: false,
                massage: "artical not found"
            })
        }
        artical = await ARTICAL.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(201).json({
            sucess: true,
            artical
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            masage: "a error ocured while updating",
            error: error.message
        })
    }
}


///delete one artical
exports.DeleteArtical = async (req, res, next) => {
    try {
        let artical = await ARTICAL.findById(req.params.id)
        if (!artical) {
            res.status(404).json({
                sucess: false,
                massage: "artical not found"
            })
        }
        artical = await ARTICAL.findByIdAndDelete(req.params.id, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(201).json({
            sucess: true,
            masage: "artical hasbeen deleted"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            masage: "a error ocured while Deleting",
            error: error.message
        })
    }
}


//get all data
exports.getAllData = async (req, res, next) => {
    try {
        const artical = await ARTICAL.find({})
        res.status(200)
        res.send({ status: "ok", data: artical })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            masage: "a error ocured while fatching data",
            error: error.message
        })

    }
}



