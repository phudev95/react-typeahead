var React = require('react');
var classNames = require('classnames');

/**
 * A single option within the TypeaheadSelector
 */
var TypeaheadOption = React.createClass({
    propTypes: {
        customClasses: React.PropTypes.object,
        customValue: React.PropTypes.string,
        onClick: React.PropTypes.func,
        // old: children: React.PropTypes.string
        // output: <b>lov</b>e
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        hover: React.PropTypes.bool
    },

    getDefaultProps: function () {
        return {
            customClasses: {},
            onClick: function (event) {
                event.preventDefault();
            }
        };
    },

    render: function () {
        var classes = {};
        classes[this.props.customClasses.hover || "hover"] = !!this.props.hover;
        classes[this.props.customClasses.listItem] = !!this.props.customClasses.listItem;

        if (this.props.customValue) {
            classes[this.props.customClasses.customAdd] = !!this.props.customClasses.customAdd;
        }

        var classList = classNames(classes);

        return (
            <li className={classList} onClick={this._onClick}>
                <a href="javascript: void 0;" className={this._getClasses()} ref="anchor">
                    { this.props.children }
                </a>
            </li>
        );
    },

    _getClasses: function () {
        var classes = {
            "typeahead-option": true,
        };
        classes[this.props.customClasses.listAnchor] = !!this.props.customClasses.listAnchor;

        return classNames(classes);
    },

    _onClick: function (event) {
        event.preventDefault();
        return this.props.onClick(event);
    }
});


module.exports = TypeaheadOption;
