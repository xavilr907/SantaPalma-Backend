export const calcularTotal = (items) =>
  items.reduce((total, item) => total + item.subtotal, 0)
