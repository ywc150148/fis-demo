const _PUBLICPATH = "/dist/";

// fis.match('::packager', {
//     spriter: fis.plugin('csssprites')
// });

// 所有的文件产出到 static/ 目录下
fis.match('*', {
    useHash: false,
    release: _PUBLICPATH + '$0'
});

// 压缩js
fis.match('*.{js,jsx,ts,tsx,es6,es}', {
    optimizer: fis.plugin('uglify-js')
});

// npm install -g fis-parser-less
fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})

// 添加前缀 npm install -g fis3-preprocessor-autoprefixer
fis.match('*.{css,less,scss}', {
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    })
});

// 压缩css
fis.match('*.css', {
    useSprite: true,
    useHash: true,
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    useHash: true,
    optimizer: fis.plugin('png-compressor')
});

// widget源码目录下的资源被标注为组件
fis.match('/widget/**/*', {
    isMod: true
});

// widget下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/widget/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});

// test 目录下的原封不动产出到 test 目录下
fis.match('/test/**/*', {
    release: '$0'
});

// FIS3 会读取全部项目目录下的资源，如果有些资源不想被构建，通过以下方式排除。
fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'fis-conf.js',
    'readme.md',
    'widget/**',
    'package-lock.json',
    'package.json'
]);

// 打包文件发布地址 绝对路径
// fis.match('*', {
//     deploy: fis.plugin('local-deliver', {
//         to: 'C:/Users/rocher/AppData/Local/.fis3-tmp/www'
//     })
// })
