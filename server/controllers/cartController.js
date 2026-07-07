import Cart from "../models/cartModel.js";

const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findOne({ userId: req.user._id });
    res.json(cartItems ? cartItems.items : []);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items" });
  }
};

const addToCart = async (req, res) => {
  const { itemId, title, description, url, price, quantity } = req.body;
  console.log(req.body);

  try {
    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        items: [],
      });
      return res.status(201).json(cart.items);
    }

    cart.items.push({
      itemId,
      title,
      description,
      url,
      price,
      quantity: quantity || 1,
    });
    await cart.save();

    return res.status(201).json(cart.items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const { quantity } = req.body;
  const { id } = req.params;

  try {
    const cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItem = cart.items.id(id);
    if (!cartItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cartItem.quantity = quantity;
    await cart.save();

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart" });
  }
};

const deleteCartItem = async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItem = cart.items.id(id);
    if (!cartItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.items = cart.items.filter((item) => item._id.toString() !== id);
    await cart.save();

    res.json({ message: "Cart item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting cart item" });
  }
};

export { getCartItems, addToCart, updateCart, deleteCartItem };
