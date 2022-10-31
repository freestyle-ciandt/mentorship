import myModule, { WELCOME_MESSAGE, sayHello, MESSAGE_DISPLAY_TIMEOUT_MS, LOGIN_ATTEMPTS_LIMIT } from '../index';

describe('E2 - Import/Export modules', () => {
  test('Should import constant successfully', () => {
    expect(WELCOME_MESSAGE).toEqual('Welcome, customer!');
  });

  test('Should import function successfully', () => {
    expect(typeof sayHello).toEqual('function');
    expect(sayHello()).toEqual('Hello!');
  });

  test('Should import default function successfully', () => {
    expect(typeof myModule.sayGoodbye).toEqual('function');
    expect(myModule.sayGoodbye()).toEqual('Goodbye!');
  });

  test('Should import values exported from another file', () => {
    expect(MESSAGE_DISPLAY_TIMEOUT_MS).toBe(2000);
    expect(LOGIN_ATTEMPTS_LIMIT).toBe(3);
  });
});

