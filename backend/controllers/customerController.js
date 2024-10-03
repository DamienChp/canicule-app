const Customer = require('../models/customerModel');

exports.createCustomer = (req, res, next) => {
    delete req.body._id;
    const customer = new Customer({
        ...req.body
    });
    customer.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement:', error); // Log plus détaillé de l'erreur
            res.status(400).json({ message: 'Erreur lors de l\'enregistrement', error: error.message });
        });};

exports.getAllCustomer = (req, res, next) => {
    Customer.find()
        .then(customer => res.status(200).json(customer))
        .catch(error => res.status(400).json({ error }));
}

exports.getOneCustomer = (req, res, next) => {
    Customer.findOne({ _id: req.params.id })
        .then(customer => res.status(200).json(customer))
        .catch(error => res.status(404).json({ error }));
}

exports.modifyCustomer = (req, res, next) => {
    Customer.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteCustomer = (req, res, next) => {
    Customer.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}