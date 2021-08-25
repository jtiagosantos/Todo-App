const express = require('express');
const path = require('path');
const taskRoutes = require('./src/routes/task.routes');
const pageRoutes  =require('./src/routes/page.routes');

const app = express();
const PORT = 3000;

require('./database/index');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(taskRoutes);
app.use(pageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));