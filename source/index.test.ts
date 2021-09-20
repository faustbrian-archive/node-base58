import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("a")).toStrictEqual("2g");
});

test("#decode", () => {
  expect(decode("2g").toString("utf8")).toStrictEqual("a");
});
