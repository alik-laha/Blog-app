const ARTICAL = require('../model/articalModel')


//creat a artical
exports.createArtical = async (req, res, next) => {
    try {
        const artical = await ARTICAL.create(req.body)
        artical.save();
        res.status(201).json({
            sucess: "true"
        })
    } catch (error) {
        res.status(409).json({
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
       let artical = await ARTICAL.findByIdAndDelete(req.params.id, {
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
        res.send({ data: artical })
    } catch (error) {
        res.status(404).json({
            sucess: false,
            masage: "a error ocured while fatching data",
            error: error.message
        })

    }
}

//get a artical
exports.getOne = async (req, res, next) => {
    try {
        const artical = await ARTICAL.findById(req.params.id)
        if(artical) {
            res.status(200)
            res.send({data: artical})
        }
        else{
            res.status(404).json({
                sucess: false,
                massage: "artical not found"
            })
        }
    } catch {
        res.status(404).json({
            sucess: false,
            masage: "a error ocured while fatching data",
            error: error.message
        })
    }
}

//for searching api
exports.search = async (req, res, next) => {
    try {
        const data = await ARTICAL.find({
            '$or': [
                { writer: { $regex: req.params.key } },
                { header: { $regex: req.params.key } },
                { subject: { $regex: req.params.key } }
            ]
        });
        res.status(200);
        res.send({ status: 'ok', data: data })
    } catch (error) {
        res.status(404).json({
            sucess: false,
            masage: "a error ovured while searching",
            error: error.masage
        });
    }
}



