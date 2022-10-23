let products = new Vue({
    el: '#prd',
    data:{
        count: 0,
        overall_price: 0,
        selectedProduct: 0,
        products: [
            {
                image: '../images/product_1.png',
                name: 'playful small treeat',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 9.50,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_2.png',
                name: 'Foaming Shower Gel',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 6.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_3.png',
                name: 'shower foam flower',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 7.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_4.png',
                name: 'anti-paerspirant spray',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 6.50,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_5.png',
                name: 'fizzing bath bomb',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 4.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_6.png',
                name: 'volume mascara',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 9.50,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_7.png',
                name: 'crackling body mouse',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 7.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_8.png',
                name: 'body scream',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 6.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_9.png',
                name: 'happifying body mist',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 9.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_10.png',
                name: 'bath oil candle',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 12.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_11.png',
                name: 'playable foam',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 7.90,
                quantity: 0,
                active: false
            },
            {
                image: '../images/product_12.png',
                name: 'sparkling body mist',
                info: 'The ritual of Holi, gift set S, XS gr',
                price: 9.90,
                quantity: 0,
                active: false
            }
        ]
    },
    methods: {
        widthX() {
            let w;
            if (w >= 40) {
                w = 40
            } else if (w <= 0) {
                w = 0
            } else {
                w = this.overall_price * 2.5
            }
            return w.toFixed(2)
        },
        reminder() {
            let q
            if (this.w > 0) {
                q = 40 - this.w
            } else {
                q = 0
            }
            return q.toFixed(2)
        },
        free() {
            let msg;
            let g = (40 - this.widthX() / 2.5).toFixed(2)
            if (g <= 40 && g > 0) {
                msg = 'You have to pay ' + g + ' $ to get free gift'
            } else if (g <= 0) {
                msg = 'The gift is yours'
            } else {
                g = 40
            }
            return msg;
        },
        toggleIt(rightOpen){
            if(!rightOpen){
                document.querySelector('.added').style.right='0'
                document.querySelector('.bg-add').style.display = 'inline-block'
                rightOpen = false    
            }else{
                document.querySelector('.added').style.right='-450px'
                document.querySelector('.bg-add').style.display = 'none'
                rightOpen = true  
            }
        }    
    }
})