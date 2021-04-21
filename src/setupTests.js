// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

module.exports = {
    recursive: true,
    timeout: 50000,
    spect:[
        'src/**/*.test.js',
        'src/**/*.spect.js',
        'src/**/**/*.test.js',
        'src/**/**/*.spect.js',
    ],
};