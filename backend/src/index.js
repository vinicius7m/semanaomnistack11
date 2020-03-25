const express = require('express');
const cors = require('cors');
// ./ referencia a mesma pasta pois se não tiver ele reconhecerá como um pacote
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 