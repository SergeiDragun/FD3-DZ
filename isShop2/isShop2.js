let IsShop2 = React.createClass({

    displayName: "isShop2",

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                balance: React.PropTypes.number.isRequired,
            })
        )
    },

    getDefaultProps: function() {
        return {shopName: "какой-то магазин"}
    },

    getInitialState: function() {
        return {
            products: this.props.products,
            selectedProductCode: null
        }
    },

    productSelected: function(code) {
        this.setState({selectedProductCode: code})
    },

    deletedProduct: function(code) {
        let productsArrCopy = this.state.products.slice()
        let filteredProductsArr = productsArrCopy.filter(v => v.code!==code)
        this.setState({products: filteredProductsArr, selectedProductCode: null})
    },

    render: function() {

        let products = this.state.products.map( v =>
            React.createElement(Product, {
                key: v.code,
                code: v.code,
                name: v.name,
                price: v.price,
                url: v.url,
                balance: v.balance,
                isSelected: this.state.selectedProductCode,
                cbProductSelected: this.productSelected,
                cbDeletedProduct: this.deletedProduct,
            })
        );

        return React.DOM.table({className: "IsShop2"},
            React.DOM.caption({className: "ShopName"}, this.props.shopName),
            React.DOM.thead({className: "Options"},
                React.DOM.tr(null,
                    React.DOM.th( null, "Name"),
                    React.DOM.th( null, "URL"),
                    React.DOM.th( null, "Price"),
                    React.DOM.th( null, "Quantity"),
                    React.DOM.th( null, "Control"),
                )
            ),
            React.DOM.tbody({className: "Products"}, products)
        )
    },
})