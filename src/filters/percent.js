
export default function (num) {
  const Num = num / 100;
  return numeral(Num).format('%');
}
