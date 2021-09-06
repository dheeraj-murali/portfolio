export const encode = (data: EncodeForm) => {
  return Object.keys(data)
    .map((key) => {
      // @ts-ignore
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    })
    .join("&");
};
