export const moneyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

export const timeDiffCalc = (ThoiGianHaCanh, ThoiGianKhoiHanh) => {
  let diffInMilliSeconds = Math.abs(ThoiGianHaCanh - ThoiGianKhoiHanh) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  return `${hours + days * 24} giờ ${minutes} phút`;
};
