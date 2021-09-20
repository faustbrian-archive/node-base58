import { base58 } from "bstring";

export const encode = (content: string): string =>
  base58.encode(Buffer.from(content));
export const decode = (content: string): Buffer => base58.decode(content);
