const Swimwear = require('../models/swimwearModel');

exports.createSwimwear = (req, res, next) => {
    delete req.body._id;
    const swimwear = new Swimwear({
        ...req.body
    });
    swimwear.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllSwimwear = (req, res, next) => {
    Swimwear.find()
        .then(swimwear => res.status(200).json(swimwear))
        .catch(error => res.status(400).json({ error }));
}

exports.getOneSwimwear = (req, res, next) => {
    Swimwear.findOne({ _id: req.params.id })
        .then(swimwear => res.status(200).json(swimwear))
        .catch(error => res.status(404).json({ error }));
}

exports.modifySwimwear = (req, res, next) => {
    Swimwear.findByIdAndUpdate(
        req.params.id,
        { ...req.body, _id: req.params.id },
        { new: true, runValidators: true }
    )
    .then(updatedSwimwear => {
        if (!updatedSwimwear) {
            return res.status(404).json({ message: 'Maillot de bain non trouvé !' });
        }
        res.status(200).json({ message: 'Objet modifié !', updatedSwimwear });
    })
    .catch(error => res.status(400).json({ error }));
}

exports.deleteSwimwear = (req, res, next) => {
    Swimwear.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.getSwimwearByBarcode = (req, res, next) => {
    const barcode = req.params.barcode
    Swimwear.findOne({ barcode: barcode })
        .then(swimwear => {
            if (!swimwear) {
                return res.status(404).json({ message: 'Maillot de bain non trouvé.' });
            }
            res.status(200).json(swimwear);
        })
        .catch(error => res.status(500).json({ error }));
}
