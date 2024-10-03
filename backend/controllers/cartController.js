const Cart = require('../models/cartModel');

exports.addToCart = (req, res, next) => {
    try {
        const { customerId, swimwearId, quantity } = req.body;

        let cart;

        if (customerId) {
            cart = Cart.findOne({ customer: customerId });
        } else {
            cart = Cart.findOne({ isAnonymous: true });
        }

        if (!cart) {
            cart = new Cart({
                customer: customerId || null,
                items: [{ swimwear: swimwearId, quantity: quantity }],
                isAnonymous: !customerId
            });
        }

        cart.items.push({ swimwear: swimwearId, quantity: quantity });

        cart.save()
            .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
            .catch(error => res.status(400).json({ error }));
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.getCart = (req, res, next) => {
    Cart.find()
        .then(cart => res.status(200).json(cart))
        .catch(error => res.status(400).json({ error }));
};