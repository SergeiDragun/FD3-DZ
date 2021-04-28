let Product = React.createClass({

    displayName: "Product",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        balance: React.PropTypes.number.isRequired,
        isSelected: React.PropTypes.number, // null если пока ничего не выбрано
        cbProductSelected: React.PropTypes.func.isRequired,
        cbDeletedProduct: React.PropTypes.func.isRequired,
    },

    productSelected: function(EO) {
        this.props.cbProductSelected(this.props.code)
    },

    deletedProduct: function(EO) {
        EO.stopPropagation()
        this.props.cbDeletedProduct(this.props.code)
    },

    render: function() {

        const productClass = `Product ${this.props.isSelected===this.props.code?"Product_selected":""}`

        return React.DOM.tr({className: productClass, onClick: this.productSelected},
            React.DOM.td( null, this.props.name ),
            React.DOM.td( null, React.DOM.img({src: this.props.url}) ),
            React.DOM.td( null, this.props.price),  
            React.DOM.td( null, this.props.balance),  
            React.DOM.td( null, React.DOM.input({type: "button", value: "Удалить", onClick: this.deletedProduct})),  
        )
    }

})