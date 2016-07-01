import { expect, fail } from 'code';
import { script } from 'lab';
export const lab = script();

import { IHaveVersion, loadPackageMetadataSync } from '../src';

lab.experiment('loadPackageMetadataSync result', () => {
    let metadata: IHaveVersion;

    lab.before(done => {
        metadata = loadPackageMetadataSync();
        done();
    });

    lab.test('is an object with name and version', done => {
        expect(metadata).to.be.an.object()
            .and.contain([ 'name', 'version' ]);
        done();
    })

    lab.test('has correct .name', done => {
        expect(metadata.name, 'name').to.equal('lab-coverage-vs-sourcemaps-typescript-edition');
        done();
    })

    lab.test('has correct .version', done => {
        // The transpiled output for this file is 28 lines long.
        // 'npm run fail' correctly reports a failure in line 30: 
        const expectedVersion = process.env.BAD_VERSION || '1.0.0';
        expect(metadata.version, 'version').to.equal(expectedVersion);
        done();
    })
});
