export type StatsInit<T> = {
    [key in keyof T]: number;
}
