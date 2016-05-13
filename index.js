'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Roman = function () {
    /**
     * constructor Set our Roman Numeral identifier object
     */

    function Roman() {
        _classCallCheck(this, Roman);

        this.romanNumeralMapper = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
    }

    /**
     * getRomanFromInteger Convert integer to Roman Numeral
     * @param  {Number} input User input
     * @return {String}       Calculated result
     */


    _createClass(Roman, [{
        key: 'getRomanFromInteger',
        value: function getRomanFromInteger() {
            var input = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

            var result = '';

            if (input) {
                for (var roman in this.romanNumeralMapper) {
                    while (input >= this.romanNumeralMapper[roman]) {
                        result += roman;
                        input -= this.romanNumeralMapper[roman];
                    }
                }
            }

            return result;
        }

        /**
         * processRomanFromInteger Use recursion to calculate Roman Numeral
         * @param  {String} input User input
         * @return {Number}       Calculated result
         */

    }, {
        key: 'processRomanFromInteger',
        value: function processRomanFromInteger() {
            var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            if (!input) return 0;

            if (input.startsWith('M')) {
                return 1000 + this.processRomanFromInteger(input.slice(1));
            }
            if (input.startsWith('CM')) {
                return 900 + this.processRomanFromInteger(input.slice(2));
            }
            if (input.startsWith('D')) {
                return 500 + this.processRomanFromInteger(input.slice(1));
            }
            if (input.startsWith('CD')) {
                return 400 + this.processRomanFromInteger(input.slice(2));
            }
            if (input.startsWith('C')) {
                return 100 + this.processRomanFromInteger(input.slice(1));
            }
            if (input.startsWith('XC')) {
                return 90 + this.processRomanFromInteger(input.slice(2));
            }
            if (input.startsWith('L')) {
                return 50 + this.processRomanFromInteger(input.slice(1));
            }
            if (input.startsWith('XL')) {
                return 40 + this.processRomanFromInteger(input.slice(2));
            }
            if (input.startsWith('X')) {
                return 10 + this.processRomanFromInteger(input.slice(1));
            }
            if (input.startsWith('IX')) {
                return 9 + this.processRomanFromInteger(input.slice(2));
            }
            if (input.startsWith('V')) {
                return 5 + this.processRomanFromInteger(input.slice(1));
            }
            if (input.startsWith('IV')) {
                return 4 + this.processRomanFromInteger(input.slice(2));
            }
            if (input.startsWith('I')) {
                return 1 + this.processRomanFromInteger(input.slice(1));
            }
        }

        /**
         * getIntegerFromRoman Abstract process into a getter
         * @param  {String} input User input
         * @return {Number}       Calculated result
         */

    }, {
        key: 'getIntegerFromRoman',
        value: function getIntegerFromRoman() {
            var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            return this.processRomanFromInteger(input);
        }
    }]);

    return Roman;
}();

module.exports = new Roman();