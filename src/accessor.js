var Accessor = {
    IDENTITY_FN: function (input) {
        return input;
    },

    generateAccessor: function (field) {
        return function (object) {
            return object[field];
        };
    },

    generateOptionToStringFor: function (prop) {
        if (typeof prop === 'string') {
            return this.generateAccessor(prop);
        } else if (typeof prop === 'function') {
            return prop;
        } else {
            return this.IDENTITY_FN;
        }
    },

    valueForOption: function (option, object) {
        if (typeof option === 'string') {
            return object[option];
        } else if (typeof option === 'function') {
            return option(object);
        } else {
            return object;
        }
    },

    getValueOfDisplayOption: function (data) {
        var result = {};

        if (data && data.jsx && data.value) {
            result = {
                jsx: data.jsx,
                value: data.value
            }
        }
        else {
            result = {
                jsx: data,
                value: data
            };
        }

        return result;
    }
};

module.exports = Accessor;
