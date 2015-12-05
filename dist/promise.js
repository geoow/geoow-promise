'use strict';

(function () {
    'use strict';

    window.Promise = Promise;

    /**
     * Promise Object
     * @param {Function} startFunction
     * @constructor
     */
    function Promise(startFunction) {
        this.startFunction = startFunction;

        this.startFunction.call(this.startFunction, resolver.bind(this), rejecter.bind(this));
    }
    Promise.prototype = {
        then: function then(nextStep, catcher) {
            this.nextStep = nextStep;
            this.catcher = catcher;
            return this;
        },

        catch: function _catch(catcher) {
            this.catcher = catcher;
            return this;
        }
    };

    /**
     * Call the .then
     */
    function resolver() {
        if (typeof this.nextStep === 'function') {
            this.nextStep.apply(this.startFunction, arguments);
        }
    }

    /**
     * Call the .catch
     */
    function rejecter() {
        if (typeof this.catcher === 'function') {
            this.catcher.apply(this.startFunction, arguments);
        }
    }
})();