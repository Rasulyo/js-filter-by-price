let courses = [{
        name: "Courses in England",
        prices: [0, 100]
    },
    {
        name: "Courses in Germany",
        prices: [500, null]
    },
    {
        name: "Courses in Italy",
        prices: [100, 200]
    },
    {
        name: "Courses in Russia",
        prices: [null, 400]
    },
    {
        name: "Courses in China",
        prices: [50, 250]
    },
    {
        name: "Courses in USA",
        prices: [200, null]
    },
    {
        name: "Courses in Kazakhstan",
        prices: [56, 324]
    },
    {
        name: "Courses in France",
        prices: [null, null]
    },
];

let requiredRange1 = [100, 350];
let requiredRange2 = [200, null];
let requiredRange3 = [null, 200];


function selectedValue() {
    let list = document.getElementsByClassName('course')
    let select = document.getElementById('select');
    let option = select.options[select.selectedIndex].text;
    courses.filter(item => {
        if (option === '100-350') {
            if (item.prices[0] >= requiredRange1[0] 
                && item.prices[0] <= requiredRange1[requiredRange1.length - 1]  
                // && item.prices[item.prices.length - 1] >= requiredRange1[0]
                // && item.prices[item.prices.length - 1] <= requiredRange1[requiredRange1.length - 1]
                ) {
                render()
            }
        } else if (option === 'от 200') {
            if (item.prices[0] >= requiredRange2[0]) {
                render()
            }

        } else if (option === 'до 200') {
            if ((item.prices[item.prices.length - 1] || item.prices[0])  <= requiredRange3[requiredRange3.length - 1]) {
                render()
            }
        } else if (option === 'все') {
            render()
        }

        function render() {
            let li = document.createElement('li')
            let prices = item.prices
            if(list[0].innerHTML){
                console.log('list 0 empthy')
                // list[0].innerHTML = ''
            }
            li.innerHTML = `${item.name} -  ${prices} `
            list[0].appendChild(li)
        }
    })

}
selectedValue()
// function render() {
//     let li = document.createElement('li')
//     let prices = item.prices
//     li.innerHTML = `${item.name} -  ${prices} `
//     document.body.append(li)
// courses.forEach(item => {
// })
// }
// if (prices[0] === null && (prices.length - 1) === 0) {
//     console.log('0000000000000000')
// }





// let priceItem = document.createElement('li')
// if (prices[0] === null && prices[0] === 0) {
//     console.log(prices[0])
// }
// if (prices[prices.length - 1 === null]) {
//     console.log(prices.length - 1)

//     return prices[prices.length - 1] = 99999999999
// }
// priceItem.innerHTML = ` ${ price}`
// console.log(price, 'f')
// document.body.appendChild(priceItem)
// console.log(prices[0])