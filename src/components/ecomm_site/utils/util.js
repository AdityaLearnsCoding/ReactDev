const getTotalQuantity = (list) => {
    return list.reduce((sum,item) => {
        return sum + item.quantity
    }, 0)
}

const formatMoney = (amountInCents) => {
    return `$${Number(amountInCents / 100).toFixed(2)}` 
}

// Named exports:
export { getTotalQuantity, formatMoney }