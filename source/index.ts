import { encoding } from "bcrypto";

export const encode = (content: string): string =>
  encoding.base58.encode(Buffer.from(content));

export const decode = (content: string): Buffer =>
  encoding.base58.decode(content);
