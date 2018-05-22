'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTitle = function (_React$Component) {
    _inherits(AddTitle, _React$Component);

    function AddTitle(props) {
        _classCallCheck(this, AddTitle);

        var _this = _possibleConstructorReturn(this, (AddTitle.__proto__ || Object.getPrototypeOf(AddTitle)).call(this, props));

        _this.state = {
            entry: ''
        };
        return _this;
    }

    _createClass(AddTitle, [{
        key: 'textInputHandler',
        value: function textInputHandler(str) {
            //console.log(str.target.value)
            this.setState({ entry: str.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement('input', { id: 'textArea', type: 'text', value: this.state.entry, onChange: function onChange(event) {
                    return _this2.textInputHandler(event);
                } }),
                React.createElement(
                    'button',
                    { id: 'searchButton', onClick: function onClick() {
                        return _this2.props.onClick(_this2.state.entry);
                    } },
                    'Add!'
                )
            );
        }
    }]);

    return AddTitle;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FkZFRpdGxlLmpzeCJdLCJuYW1lcyI6WyJBZGRUaXRsZSIsInByb3BzIiwic3RhdGUiLCJlbnRyeSIsInN0ciIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJldmVudCIsInRleHRJbnB1dEhhbmRsZXIiLCJvbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0osb0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxvSEFDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBRmtCO0FBS25COzs7O3FDQUVnQkMsRyxFQUFLO0FBQ3JCO0FBQ0QsV0FBS0MsUUFBTCxDQUFjLEVBQUNGLE9BQU1DLElBQUlFLE1BQUosQ0FBV0MsS0FBbEIsRUFBZDtBQUNDOzs7NkJBRVM7QUFBQTs7QUFFUixhQUNFO0FBQUE7QUFBQTtBQUNFLHVDQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLE1BQTFCLEVBQWlDLE9BQU8sS0FBS0wsS0FBTCxDQUFXQyxLQUFuRCxFQUEwRCxVQUFVLGtCQUFDSyxLQUFEO0FBQUEsbUJBQVcsT0FBS0MsZ0JBQUwsQ0FBc0JELEtBQXRCLENBQVg7QUFBQSxXQUFwRSxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsSUFBRyxjQUFYLEVBQTBCLFNBQVM7QUFBQSxxQkFBTSxPQUFLUCxLQUFMLENBQVdTLE9BQVgsQ0FBbUIsT0FBS1IsS0FBTCxDQUFXQyxLQUE5QixDQUFOO0FBQUEsYUFBbkM7QUFBaUY7QUFBakY7QUFGRixPQURGO0FBTUQ7Ozs7RUFyQm9CUSxNQUFNQyxTIiwiZmlsZSI6IkFkZFRpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW50cnk6ICcnXG4gICAgfVxuICB9XG4gIFxuICB0ZXh0SW5wdXRIYW5kbGVyKHN0cikge1xuICBcdC8vY29uc29sZS5sb2coc3RyLnRhcmdldC52YWx1ZSlcbiAgdGhpcy5zZXRTdGF0ZSh7ZW50cnk6c3RyLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgaWQ9XCJ0ZXh0QXJlYVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZW50cnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMudGV4dElucHV0SGFuZGxlcihldmVudCl9IC8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2hCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5zdGF0ZS5lbnRyeSl9ID57J0FkZCEnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICBcdClcbiAgfVxuXG5cblxuXG5cblxufVxuIl19