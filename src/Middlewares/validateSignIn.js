import signInSchema from "../Schemas/signInSchemas.js";

function validateSignIn(req, res, next){
    const customer = req.body;

    const {error} = signInSchema.validate(customer, {abortEarly: false});

    if(error){
        const erros = error.details.map(erro => erro.message)
        return res.status(422).send(erros)
    }

    next()
}

export default validateSignIn;