import dayjs from 'dayjs';

const baseUrl = "http://localhost:3001";

const getTotalQuantity = (list) => {
    return list.reduce((sum,item) => {
        return sum + item.quantity
    }, 0)
}

const formatMoney = (amountInCents) => {
    return `$${Number(amountInCents / 100).toFixed(2)}` 
}

const formatDate = (dateInMs) => {
    return dayjs(dateInMs).format("dddd, MMMM D")
} 
// Named exports:
export { baseUrl,
         getTotalQuantity,
         formatMoney,
         formatDate  }