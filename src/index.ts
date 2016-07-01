import { readFileSync } from 'fs';
import { join } from 'path';

export interface IHaveVersion {
    version: string;
    name: string;
}

export function loadPackageMetadataSync(path?: string): IHaveVersion {
    path = path || join(__dirname, '..', 'package.json');
    const { name, version } = JSON.parse(readFileSync(path, 'utf8'));
    return { name, version };
}
