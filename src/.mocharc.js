module.exports = {
    recursive: true,
    slow: 75,
    timeout: 5000,
    spect:[
        'src/**/*.test.js',
        'src/**/*.spect.js',
        'src/**/**/*.test.js',
        'src/**/**/.spect.js',
    ],
};