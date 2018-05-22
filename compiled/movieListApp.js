'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListApp = function (_React$Component) {
    _inherits(MovieListApp, _React$Component);

    function MovieListApp(props) {
        _classCallCheck(this, MovieListApp);

        var _this = _possibleConstructorReturn(this, (MovieListApp.__proto__ || Object.getPrototypeOf(MovieListApp)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(MovieListApp, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement('div', null),
                React.createElement(
                    'div',
                    { id: 'listEntry' },
                    this.props.movieEntry.title
                )
            );
        }
    }]);

    return MovieListApp;
}(React.Component);

/*
SELECT user.id FROM users  LEFT JOIN my_table2 t2 
 ON t1.my_id = t2.field2 WHERE t1.my_id IN (1,2,3) AND t2.field2 IS NULL

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllTGlzdEFwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0QXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllRW50cnkiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFk7OztBQUNKLHdCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsNEhBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmtCO0FBS25COzs7OzZCQUNTOztBQUVSLGFBQ0U7QUFBQTtBQUFBO0FBQ0Qsd0NBREM7QUFFRDtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFBcUIsZUFBS0QsS0FBTCxDQUFXRSxVQUFYLENBQXNCQztBQUEzQztBQUZDLE9BREY7QUFNRDs7OztFQWZ3QkMsTUFBTUMsUzs7QUFrQmpDIiwiZmlsZSI6Im1vdmllTGlzdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFxuICAgIH07XG4gIH1cbiAgcmVuZGVyICgpIHtcbiBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblx0ICAgIDxkaXY+PC9kaXY+XG5cdCAgICA8ZGl2IGlkPVwibGlzdEVudHJ5XCI+e3RoaXMucHJvcHMubW92aWVFbnRyeS50aXRsZSB9PC9kaXY+XG5cdCAgPC9kaXY+XG4gICBcdCk7XG4gIH1cbn1cblxuLypcblNFTEVDVCB1c2VyLmlkIEZST00gdXNlcnMgIExFRlQgSk9JTiBteV90YWJsZTIgdDIgXG4gT04gdDEubXlfaWQgPSB0Mi5maWVsZDIgV0hFUkUgdDEubXlfaWQgSU4gKDEsMiwzKSBBTkQgdDIuZmllbGQyIElTIE5VTExcblxuKi8iXX0=