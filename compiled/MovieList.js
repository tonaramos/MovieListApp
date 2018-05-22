'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
    _inherits(MovieList, _React$Component);

    function MovieList(props) {
        _classCallCheck(this, MovieList);

        var _this = _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));

        _this.state = {
            movieArray: []
        };
        return _this;
    }

    _createClass(MovieList, [{
        key: 'searchHandler',
        value: function searchHandler(str) {
            console.log('this props', this.props);
            var filterQueryMatch = this.state.movieArray.filter(function (movie) {
                return movie.title.includes(str);
            });
            if (filterQueryMatch.length === 0) {
                filterQueryMatch = [{ title: 'no movie by that name found...' }];
            }
            this.setState({ movieArray: filterQueryMatch });
        }
    }, {
        key: 'addHandler',
        value: function addHandler(str) {
            var newTitle = { title: str };
            this.state.movieArray.push(newTitle);
            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listMovies = this.state.movieArray.map(function (entry, i) {
                return React.createElement(MovieListApp, { movieEntry: entry, key: i });
            });
            console.log(this.state.movieArray);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { id: 'title' },
                        'Movie List App!'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(AddTitle, { id: 'AddTitle', onClick: function onClick(title) {
                        return _this2.addHandler(title);
                    } }),
                    React.createElement(SearchBar, { id: 'searchBar', onClick: function onClick(query) {
                        return _this2.searchHandler(query);
                    } })
                ),
                React.createElement(
                    'div',
                    { id: 'movieListBoard' },
                    React.createElement(
                        'div',
                        null,
                        listMovies
                    )
                )
            );
        }
    }]);

    return MovieList;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllQXJyYXkiLCJzdHIiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyUXVlcnlNYXRjaCIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJpbmNsdWRlcyIsImxlbmd0aCIsInNldFN0YXRlIiwibmV3VGl0bGUiLCJwdXNoIiwibGlzdE1vdmllcyIsIm1hcCIsImVudHJ5IiwiaSIsImFkZEhhbmRsZXIiLCJxdWVyeSIsInNlYXJjaEhhbmRsZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNIQUNaQSxLQURZOztBQUVsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVk7QUFERCxLQUFiO0FBRmtCO0FBS25COzs7O2tDQUNjQyxHLEVBQUs7QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCLEtBQUtMLEtBQTlCO0FBQ0EsVUFBSU0sbUJBQW1CLEtBQUtMLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkssTUFBdEIsQ0FBOEI7QUFBQSxlQUFTQyxNQUFNQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJQLEdBQXJCLENBQVQ7QUFBQSxPQUE5QixDQUF2QjtBQUNBLFVBQUlHLGlCQUFpQkssTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakNMLDJCQUFtQixDQUFDLEVBQUNHLE9BQU8sZ0NBQVIsRUFBRCxDQUFuQjtBQUNEO0FBQ0QsV0FBS0csUUFBTCxDQUFjLEVBQUNWLFlBQVdJLGdCQUFaLEVBQWQ7QUFDRDs7OytCQUNXSCxHLEVBQUs7QUFDZCxVQUFJVSxXQUFXLEVBQUNKLE9BQU1OLEdBQVAsRUFBZjtBQUNBLFdBQUtGLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQlksSUFBdEIsQ0FBMkJELFFBQTNCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEtBQUtYLEtBQW5CO0FBRUY7Ozs2QkFDUTtBQUFBOztBQUNQLFVBQU1jLGFBQWEsS0FBS2QsS0FBTCxDQUFXQyxVQUFYLENBQXNCYyxHQUF0QixDQUEwQixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxlQUFlLG9CQUFDLFlBQUQsSUFBYyxZQUFZRCxLQUExQixFQUFpQyxLQUFLQyxDQUF0QyxHQUFmO0FBQUEsT0FBMUIsQ0FBbkI7QUFDQWQsY0FBUUMsR0FBUixDQUFZLEtBQUtKLEtBQUwsQ0FBV0MsVUFBdkI7QUFDRSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsT0FBUjtBQUFpQjtBQUFqQjtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxRQUFELElBQVUsSUFBRyxVQUFiLEVBQXdCLFNBQVMsaUJBQUNPLEtBQUQ7QUFBQSxxQkFBVyxPQUFLVSxVQUFMLENBQWdCVixLQUFoQixDQUFYO0FBQUEsYUFBakMsR0FERjtBQUVFLDhCQUFDLFNBQUQsSUFBVyxJQUFHLFdBQWQsRUFBMEIsU0FBUyxpQkFBQ1csS0FBRDtBQUFBLHFCQUFXLE9BQUtDLGFBQUwsQ0FBbUJELEtBQW5CLENBQVg7QUFBQSxhQUFuQztBQUZGLFNBSkY7QUFRRTtBQUFBO0FBQUEsWUFBSyxJQUFHLGdCQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQU1MO0FBQU47QUFERjtBQVJGLE9BREY7QUFjSDs7OztFQXRDcUJPLE1BQU1DLFMiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZUFycmF5OiBbXVxuICAgIH07XG4gIH1cbiAgc2VhcmNoSGFuZGxlciAoc3RyKSB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgcHJvcHMnLHRoaXMucHJvcHMpXG4gICAgbGV0IGZpbHRlclF1ZXJ5TWF0Y2ggPSB0aGlzLnN0YXRlLm1vdmllQXJyYXkuZmlsdGVyKCBtb3ZpZSA9PiBtb3ZpZS50aXRsZS5pbmNsdWRlcyhzdHIpICk7XG4gICAgaWYgKGZpbHRlclF1ZXJ5TWF0Y2gubGVuZ3RoID09PSAwKSB7XG4gICAgICBmaWx0ZXJRdWVyeU1hdGNoID0gW3t0aXRsZTogJ25vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZC4uLid9XTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVBcnJheTpmaWx0ZXJRdWVyeU1hdGNofSk7XG4gIH1cbiAgYWRkSGFuZGxlciAoc3RyKSB7XG4gICAgIGxldCBuZXdUaXRsZSA9IHt0aXRsZTpzdHJ9O1xuICAgICB0aGlzLnN0YXRlLm1vdmllQXJyYXkucHVzaChuZXdUaXRsZSk7XG4gICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgIFxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0TW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZUFycmF5Lm1hcCgoZW50cnksIGkpID0+ICA8TW92aWVMaXN0QXBwIG1vdmllRW50cnk9e2VudHJ5fSBrZXk9e2l9IC8+IClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllQXJyYXkpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cInRpdGxlXCI+e1wiTW92aWUgTGlzdCBBcHAhXCJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBZGRUaXRsZSBpZD1cIkFkZFRpdGxlXCIgb25DbGljaz17KHRpdGxlKSA9PiB0aGlzLmFkZEhhbmRsZXIodGl0bGUpfS8+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIGlkPVwic2VhcmNoQmFyXCIgb25DbGljaz17KHF1ZXJ5KSA9PiB0aGlzLnNlYXJjaEhhbmRsZXIocXVlcnkpfSAgLz4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJtb3ZpZUxpc3RCb2FyZFwiPlxuICAgICAgICAgICAgPGRpdj57bGlzdE1vdmllc308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG4gICAgICAgICJdfQ==