import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  base64ToUint8Array(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
  uint8ToBase64(byteArray: Uint8Array): string {
    const stringFromByteArray = String.fromCharCode.apply(
      null,
      Array.from(byteArray)
    );
    return btoa(String.fromCharCode.apply(stringFromByteArray));
  }

  isBase64PNG(byteArray: Uint8Array): boolean {
    // PNG header: 137 80 78 71 13 10 26 10
    const pngHeader = [137, 80, 78, 71, 13, 10, 26, 10];
    return byteArray.subarray(0, 8).every((byte, i) => byte === pngHeader[i]);
  }

  isBase64MP3(byteArray: Uint8Array): boolean {
    // MP3 files often start with "ID3" or have the frame sync bits set.
    // This is a simplified check and might not catch all MP3 files.
    const mp3Header = [73, 68, 51]; // "ID3" in ASCII
    return byteArray.subarray(0, 3).every((byte, i) => byte === mp3Header[i]);
  }
}
