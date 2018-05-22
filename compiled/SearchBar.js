'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.state = {
            entry: ''
        };
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'handleTextChange',
        value: function handleTextChange(event) {
            this.setState({ entry: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement('input', { id: 'textArea', type: 'text', value: this.state.entry, onChange: function onChange(event) {
                    return _this2.handleTextChange(event);
                } }),
                React.createElement(
                    'button',
                    { id: 'searchButton', onClick: function onClick() {
                        return _this2.props.onClick(_this2.state.entry);
                    } },
                    'Go!'
                )
            );
        }
    }]);

    return SearchBar;
}(React.Component);



//<form type="text" placeholder={'Search...'}></form>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsImVudHJ5IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVGV4dENoYW5nZSIsIm9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBUTtBQURHLEtBQWI7QUFGaUI7QUFLbEI7Ozs7cUNBQ2lCQyxLLEVBQU87QUFDdkIsV0FBS0MsUUFBTCxDQUFjLEVBQUVGLE9BQU9DLE1BQU1FLE1BQU4sQ0FBYUMsS0FBdEIsRUFBZDtBQUNEOzs7NkJBQ1M7QUFBQTs7QUFDUixhQUNJO0FBQUE7QUFBQTtBQUNFLHVDQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLE1BQTFCLEVBQWlDLE9BQU8sS0FBS0wsS0FBTCxDQUFXQyxLQUFuRCxFQUEwRCxVQUFVLGtCQUFDQyxLQUFEO0FBQUEsbUJBQVcsT0FBS0ksZ0JBQUwsQ0FBc0JKLEtBQXRCLENBQVg7QUFBQSxXQUFwRSxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsSUFBRyxjQUFYLEVBQTBCLFNBQVM7QUFBQSxxQkFBTSxPQUFLSCxLQUFMLENBQVdRLE9BQVgsQ0FBbUIsT0FBS1AsS0FBTCxDQUFXQyxLQUE5QixDQUFOO0FBQUEsYUFBbkM7QUFBaUY7QUFBakY7QUFGRixPQURKO0FBTUQ7Ozs7RUFqQnFCTyxNQUFNQyxTOztBQWtCN0I7O0FBR0QiLCJmaWxlIjoiU2VhcmNoQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVudHJ5IDogJycsXG4gICAgfVxuICB9XG4gIGhhbmRsZVRleHRDaGFuZ2UgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVudHJ5OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRleHRBcmVhXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbnRyeX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVUZXh0Q2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2VhcmNoQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMuc3RhdGUuZW50cnkpfSA+eydHbyEnfTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgXHQpXG4gIH1cbn07XG5cblxuLy88Zm9ybSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXsnU2VhcmNoLi4uJ30+PC9mb3JtPiJdfQ==