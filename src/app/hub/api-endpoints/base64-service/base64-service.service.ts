import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  // Converts a Uint8Array to a Base64 string
  arrayToBase64(byteArray: Uint8Array): string {
    const stringFromByteArray = String.fromCharCode.apply(
      null,
      Array.from(byteArray)
    );
    return btoa(String.fromCharCode.apply(stringFromByteArray));
  }

  // Converts a Base64 string to a Uint8Array
  base64ToArray(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
}
