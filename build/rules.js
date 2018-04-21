import {config} from './config';

export function rules(env) {
    return [
        {
            test   : /\.ts$/,
            include: config.src,
            use    : [
                'babel-loader',
                'ts-loader'
            ]
        },
        {
            test   : /\.js$/,
            use    : [
                'babel-loader'
            ],
            include: config.src
        },
        {
            test: /phaser-split\.js$/,
            use : [
                'expose-loader?Phaser'
            ]
        },
        {
            test: /(?:vert|frag)$/,
            use : [
                'raw-loader'
            ]
        },
        {
            test: /\.s?css$/,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test   : /\.(png)$/,
            use    : [
                'file-loader'
            ],
            include: config.src
        }
    ];
}
