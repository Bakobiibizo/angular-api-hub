export type Base64Data = string & { readonly __base64Brand: unique symbol };
export type Base64Image = Base64Data & {
  readonly __base64ImageBrand: unique symbol;
};
export type Base64Audio = Base64Data & {
  readonly __base64AudioBrand: unique symbol;
};

// Check the return type of isBase64Audio and isBase64Image

export function isBase64PNG(byteArray: Uint8Array): boolean {
  // PNG header: 137 80 78 71 13 10 26 10
  const pngHeader = [137, 80, 78, 71, 13, 10, 26, 10];
  return byteArray.subarray(0, 8).every((byte, i) => byte === pngHeader[i]);
}

export function isBase64MP3(byteArray: Uint8Array): boolean {
  // MP3 files often start with "ID3" or have the frame sync bits set.
  // This is a simplified check and might not catch all MP3 files.
  const mp3Header = [73, 68, 51]; // "ID3" in ASCII
  return byteArray.subarray(0, 3).every((byte, i) => byte === mp3Header[i]);
}
