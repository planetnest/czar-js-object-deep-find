const find = require('./');

function Suite(file) {
  const find = require(file);

  test('simple find', () => {
    const a = { b: 'baby', c: { d: 'dad', e: { f: ['fish', 'fly'] } } };
    expect(find(a, 'f')).toBe(a.c.e.f);
  });
  
  test('complex find', () => {
    const a = require('./res/dump.json');
    const f = find(a, 'fly');
    expect(f).toBeDefined();
  });
  
  test('complex find #2', () => {
    const a = require('./res/generated.json');
    const f = find(a, 'nam');
    expect(f).toBeDefined();
  });
  
  test('should be null if not found', () => {
    const a = { b: 'baby', c: { d: 'dad', e: { f: ['fish', 'fly'] } } };
    expect(find(a, 'null')).toBeNull();
  });
}

describe("Main Test", () => Suite('./'));
// describe("Alt Test", () => Suite('./alt.js'));