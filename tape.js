import * as t from "https://deno.land/std/testing/asserts.ts";

export const test = (title, opt, func) => {
  if (typeof opt == "function") {
    func = opt;
  }
  Deno.test(title, async (denot) => {
    const tt = {
      deepEqual: (a, b) => t.assertEquals(a, b),
      equal: (a, b) => t.assertEquals(a, b),
      same: (a, b) => t.assertEquals(a, b),
      plan: () => {},
      test: async (title, func) => await denot.step(title, () => func(tt)),
      end: () => {},
      pass: () => {},
      ok: () => {},
    };
    await func(tt)
  });
};
