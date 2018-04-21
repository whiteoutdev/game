import path from 'path';

const root = path.resolve(__dirname, '..');

export const config = {
    root,
    src : path.join(root, 'src'),
    dist: path.join(root, 'dist'),
    get framework() {
        return path.join(this.src, 'framework');
    },
    get game() {
        return path.join(this.src, 'game');
    }
};
