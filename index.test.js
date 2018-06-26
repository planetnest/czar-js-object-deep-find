const find = require('./');

test('simple find', () => {
  const a = { b: 'baby', c: { d: 'dad', e: { f: ['fish', 'fly'] } } };
  expect(find(a, 'f')).toBe(a.c.e.f);
});

test('complex find', () => {
  const a = require('./res/dump.json');
  const f = find(a, 'fly');
  console.log(`f is ${f}`);
  expect(f).toBeDefined();
});