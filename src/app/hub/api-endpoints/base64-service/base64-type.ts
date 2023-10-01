export type Base64Data = string & { readonly __base64Brand: unique symbol };
export type Base64PNG = Base64Data & {
  readonly __base64PNGBrand: unique symbol;
};
export type Base64MP3 = Base64Data & {
  readonly Base64MP3Brand: unique symbol;
};


