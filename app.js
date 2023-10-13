    // Importer express 
let express = require('express')
// Initialise l'application 
let app = express();
require("./config/db").sync()
const clientRouter = require("./routes/client")
const produitRouter = require("./routes/produit")

// Configuration du port du serveur 
var port = process.env.PORT || 8090;
// Envoyer un message pour l'URL par défaut 
app.get('/', (req, res) => res.send('Hello World with Express'));
// Lance l'application pour écouter le port spécifié 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// list Routes
app.use("/client",clientRouter)
app.use("/produit",produitRouter)

app.listen(port, function () {
    console.log(`server running on ${port}`);
}); 


