import myModule, { WELCOME_MESSAGE, sayHello } from '../index';

describe('E2 - Import/Export modules', () => {
  it('Should import constant successfully', () => {
    expect(WELCOME_MESSAGE).toEqual('Welcome, customer!');
  });

  it('Should import function successfully', () => {
    expect(typeof sayHello).toEqual('function');
    expect(sayHello()).toEqual('Hello!');
  });

  it('Should import default function successfully', () => {
    expect(typeof myModule.sayGoodbye).toEqual('function');
    expect(myModule.sayGoodbye()).toEqual('Goodbye!');
  });
});

