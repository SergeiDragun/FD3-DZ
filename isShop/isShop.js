let IsShop = React.createClass({

    displayName: "isShop",

    getDefaultProps: function() {
        return { shopName: "какой-то магазин"}
    },

    render: function() {
        let products = this.props.products.map(product => {
            return React.DOM.tr({key:product.code},
                React.DOM.td( null, product.name ),
                React.DOM.td( null, React.DOM.img( {src: product.url}) ), 
                React.DOM.td( null, product.price ),
                React.DOM.td( null, product.balance )
            )
        })
        
        return React.DOM.table({className: "IsShop"},
            React.DOM.caption({className: "ShopName"}, this.props.shopName),
            React.DOM.thead({className: "Options"},
                React.DOM.tr(null,
                    React.DOM.th( null, "Продукт"),
                    React.DOM.th( null, "Изображение"),
                    React.DOM.th( null, "Цена"),
                    React.DOM.th( null, "Остаток"),
                )
            ),
            React.DOM.tbody({className: "Products"}, products)
        )

    },
    
})