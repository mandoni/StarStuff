const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModal = require("../models/user.js");

const secret = 'test';

 const signin = async (req, res) => {
     
    const { correo, password } = req.body

    try {
        const oldUser = await UserModal.findOne({ correo });

        if (!oldUser) return res.status(404).json({ message: "El usuario no existe" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Credenciales inválidos" });

        const token = jwt.sign({ correo: oldUser.correo, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });

    } catch (err) {
        res.status(500).json({ message: "Algo salió mal" });
    }
}

module.exports = {signin};

const signup = async (req, res) => {
    const { correo, password, firstName, lastName } = req.body;

    try {
        const oldUser = await UserModal.findOne({ correo });

        if (oldUser) return res.status(400).json({ message: "El usuario ya existe" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModal.create({ correo, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ correo: result.correo, id: result._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Algo salió mal" });


        console.log(error);
    }

}

module.exports = {signup};