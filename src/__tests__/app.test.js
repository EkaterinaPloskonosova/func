import statusHealth from '../app';

test('healthy health checking', () => {
  const characters = { name: 'Маг', health: 80 };
  const result = statusHealth(characters);
  expect(result).toBe('healthy');
});
test('wounded health checking', () => {
  const characters = { name: 'Мечник', health: 30 };
  const result = statusHealth(characters);
  expect(result).toBe('wounded');
});
test('critical health checking', () => {
  const characters = { name: 'Лучник', health: 5 };
  const result = statusHealth(characters);
  expect(result).toBe('critical');
});
