import path from 'path';
import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import {config} from './config';

export function plugins(env) {
    return [
        new CleanPlugin([config.dist], {root: config.root}),
        new webpack.DefinePlugin({
            'process.env'  : JSON.stringify({
                NODE_ENV: env
            }),
            WEBGL_RENDERER : true,
            CANVAS_RENDERER: true
        }),
        new HtmlPlugin({
            template: path.join(config.game, 'index.ejs')
        })
    ];
}
