const express = require("express");
const fs = require("fs");
var cors = require("cors");
const app = express();
const PORT = 3000;
 
app.use(cors());
// Helper: Load products from JSON file
const loadJsonData = () => {
	const data = fs.readFileSync("./products.json", "utf-8");
	return JSON.parse(data);
};
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
* GET /products
* Returns all products
*/
 
const __JSON_DATA__ = loadJsonData();
Object.keys(__JSON_DATA__).forEach((key) => {
	app.get(`/${key}`, (req, res) => {
		res.json(__JSON_DATA__[key]);
	});
});
 
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
