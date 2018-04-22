import {LogLevel} from './LogLevel';

// tslint:disable:no-console
export class Logger {
    public static level: LogLevel = LogLevel.INFO;

    public static trace(...args: any[]): void {
        if (Logger.level <= LogLevel.TRACE) {
            console.log(`[TRACE]`, ...args);
        }
    }

    public static debug(...args: any[]): void {
        if (Logger.level <= LogLevel.DEBUG) {
            console.log(`[DEBUG]`, ...args);
        }
    }

    public static info(...args: any[]): void {
        if (Logger.level <= LogLevel.INFO) {
            console.info(`[INFO] `, ...args);
        }
    }

    public static warn(...args: any[]): void {
        if (Logger.level <= LogLevel.WARN) {
            console.warn(`[WARN] `, ...args);
        }
    }

    public static error(...args: any[]): void {
        if (Logger.level <= LogLevel.ERROR) {
            console.error(`[ERROR]`, ...args);
        }
    }
}
// tslint:enable:no-console
