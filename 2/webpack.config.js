const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =
{
    mode: 'production',
    entry:
    {
        index: './source/scripts/index.ts',
        order: './source/scripts/order.ts'
    },
    module:
    {
        rules:
        [
            {
                test: /\.(png|jp?g|gif)$/i,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            publicPath: '/images/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization:
    {
        splitChunks: {chunks: 'all'}
    },
    output:
    {
        clean: true,
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: './'
    },
    plugins:
    [
        new HtmlWebpackPlugin
        ({
          chunks: ['index'],
          filename: 'index.html',
          inject: true,
          template: './source/pages/index.html'
        }),
        new HtmlWebpackPlugin
        ({
          chunks: ['order'],
          filename: 'order.html',
          inject: true,
          template: './source/pages/order.html'
        })
    ],
    resolve:
    {
        alias:
        {
            '@assets': path.resolve(__dirname, './source/assets/'),
            '@scripts': path.resolve(__dirname, './source/scripts/'),
            "@styles":  path.resolve(__dirname, './source/assets/styles/styles.css')
        },
        extensions: ['.tsx', '.ts', '.js', 'css'],
    }
};