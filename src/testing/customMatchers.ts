import chalk from 'chalk';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeWithContext(expected: any, context: any): R;
        }
    }
}

expect.extend({
    toBeWithContext(received, expected, context) {
        const pass = Object.is(received, expected);
        return {
            message: () => `
Expected value${pass ? ' not' : ''} to be:
    ${this.utils.printExpected(expected)}
Received:
    ${this.utils.printReceived(received)}
Context:
    ${chalk.cyan(context)}
            `,
            pass
        };
    }
});
