import { test } from "../tape.js";
var ran = 0;

test('timeout', async function (t) {
	t.pass('this should run');
	ran++;
	await new Promise((resolve) => {
		setTimeout(function () {
			t.end();
			resolve();
		}, 100);
	});
});

test('should still run', { timeout: 50 }, function (t) {
	t.equal(ran, 1);
	t.end();
});
