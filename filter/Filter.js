let Filter = React.createClass({

    displayName: "Filter",

    propTypes: {
        arr: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                    name: React.PropTypes.string.isRequired,
                    code: React.PropTypes.number.isRequired,
            })
        ),
        filtered: React.PropTypes.string.isRequired,
        sorted: React.PropTypes.bool.isRequired,
    },


    getInitialState: function() {
        return {
            arr: this.props.arr,
            filtered: this.props.filtered,
            sorted: this.props.sorted,
        }
    },

    filterChanged: function(EO) {
        this.setState({filtered: EO.target.value}, this.obrabotatspisok)
    },

    sortedChanged: function(EO) {
        this.setState({sorted: EO.target.checked}, this.obrabotatspisok)
    },

    obrabotatspisok: function() {
        let newArr = this.props.arr.slice();

        if (this.state.filtered) {
            newArr = newArr.filter(v => v.name.includes(this.state.filtered))
        }

        if (this.state.sorted) {
            newArr = newArr.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
            });
        }

        this.setState({arr: newArr})
    },
    
    render: function() {

        let string = this.state.arr.map(v =>
            React.DOM.span({className: "string", key: v.code}, v.name)
        );

        return React.DOM.div({className: "Filter"},
            React.DOM.div({className: "header"},
                React.DOM.input({type: "checkbox", checked: this.state.sorted, onClick: this.sortedChanged}),
                React.DOM.input({type: "text", name: "filter", defaultValue: this.props.defInp, onChange: this.filterChanged}),
                React.DOM.input({type: "button", value: "сброс"})
            ),
            React.DOM.div({className: "area"}, string)
       )

    },

})