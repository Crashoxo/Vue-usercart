// 數字 轉 千分號
// 使用方式：import匯入，無須註冊(非元件)
export function currency(num) {
  const n = parseInt(num, 10);
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== "." && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, "")
        : c
    )}`;
}

// 資料庫時間 轉 日期格式
// 使用方式：import匯入，無須註冊(非元件)
export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}
