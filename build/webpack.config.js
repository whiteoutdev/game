import path from 'path';
import {config} from './config';
import {rules} from './rules';
import {plugins} from './plugins';

export function webpackConfig(env) {
    env = env || 'development';
    return {
        mode       : env,
        entry      : {
            app   : [
                'babel-polyfill',
                path.join(config.game, 'index.ts')
            ],
            vendor: [
                'phaser'
            ]
        },
        devtool    : 'inline-source-map',
        output     : {
            path    : config.dist,
            filename: 'game.[name].[hash].js'
        },
        module     : {
            rules: rules(env)
        },
        plugins    : plugins(env),
        performance: {
            hints: false
        },
        resolve    : {
            extensions: ['.ts', '.js', '.json']
        }
    };
}
