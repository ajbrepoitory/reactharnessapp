//Node Back End to render the HTMLs
import express from 'express';
import path from 'path';
import config from '../../webpack.config';
import webpack from 'webpack';
const port = 8080;
const app = express();
const compiler = webpack(config);

// default options

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    console.log("Webapp root Navigated at "+new Date().toString());
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        console.log("Application started successfully"); 
    }
});
