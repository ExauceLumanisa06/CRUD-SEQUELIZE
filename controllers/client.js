const Client = require("../model/client")

exports.createClient = (req, res) => {
    //reception body
    const { cli_nom, cli_tel } = req.body
    try {
        //verify if client exist
        Client.findOne({ where: { cli_nom: cli_nom } })
            .then(function (oldClient) {
                if (oldClient) return res.status(309).json({ msg: "client eciste déjà" })
                //create 
                else {
                    // new Client({
                    //     cli_nom:cli_nom,
                    //     cli_tel:cli_tel
                    // }).save()
                    Client.create(
                        {
                            cli_nom: cli_nom,
                            cli_tel: cli_tel
                        }
                    )
                        .then((client) => {
                            return res.status(201).json({ msg: "client created", client: client })
                        })
                        .catch()
                }
            })
            .catch(function (err) {
                res.json(err)
            })

    } catch (error) {
        res.json(error)
    }

}

exports.getAllClient = function (req, res) {
    try {
        Client.findAll()
            .then((clients) => {
                if (clients.length < 1) return res.status(404).send('no clients in db')
                else return res.status(200).json(clients)
            })
            .catch()

    } catch (error) {
        res.json(error)
    }
}
exports.getOneClient = (req, res) => {

    try {
        Client.findByPk(req.params.cli_id)
            .then((client) => {
                if (!client) return res.status(404).send("client non troué")
                else return res.status(200).json({ client })
            })
            .catch()

    } catch (error) {
        res.json(error)
    }
}
exports.updateClient = (req, res) => {
    const { cli_nom, cli_tel } = req.body
    try {
        Client.update({ cli_nom: cli_nom, cli_tel: cli_tel }, { where: { cli_id: req.params.cli_id } })
            .then((msg) => {
                if (msg[0] < 1) return res.send('modification non effectuée')
                else return res.send("modification reussie !")
            })
            .catch()

    } catch (error) {
        res.json(error)
    }
}
exports.deleteClient = (req, res) => {
    try {
        Client.destroy({ where: { cli_id: req.params.cli_id } })
            .then((msg) => {
                if (msg < 1) return res.send('suppression non effectuée')
                else return res.send("suppression reussie !")
            })
            .catch()

    } catch (error) {
        res.json(error)
    }
}
