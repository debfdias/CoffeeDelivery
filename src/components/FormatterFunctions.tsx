export function formatMoney(number: any) {
  const brazilMoney = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return brazilMoney;
}
