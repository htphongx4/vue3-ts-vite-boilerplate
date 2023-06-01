const { $env } = useVueApp();
export const getImageLink = (link: string | undefined) => {
  if (!link) return "";
  return `${$env.VITE_APP_MEDIA_URL}/${link}`;
};

export const formatMoney = (money: number, showPrefix = true) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  if (showPrefix) {
    return formatter.format(money);
  }
  return new Intl.NumberFormat().format(money);
};

export const formatProductLink = (name: string) => {
  return name.toLowerCase().replace(" ", "-");
};
