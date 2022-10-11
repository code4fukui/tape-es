import { test } from "https://code4fukui.github.io/tape-es/tape.js";
//import { test } from "../tape.js";

test('timing test', async function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

  	await new Promise((resolve) => {
      setTimeout(function () {
        t.equal((Date.now() - start) / 10 >> 0, 100 / 10 >> 0);
        resolve();
      }, 100);
    });
});
test('test using promises', async function (t) {
  const someAsyncThing = async () => {};
  const result = await someAsyncThing();
  t.ok(result);
});
