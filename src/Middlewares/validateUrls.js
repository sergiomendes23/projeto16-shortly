import urlSchema from "../Schemas/urlsSchemas.js";

function validateUrls(req, res, next){
    const {url} = req.body;

    const {error} =  urlSchema.validate({url}, {abortEarly: false});

    if(error){
        const erros = error.details.map(erro => error.message)
        return res.send(erros).status(422)
    }

    next()
}

export default validateUrls;