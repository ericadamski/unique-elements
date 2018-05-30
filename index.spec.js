const unique = require('./index');

describe('.unique', () => {
    it('should return an empty array if nothing is passed', () => {
        expect(unique()).toEqual([]);
    });

    it('should should return unique elements for simple types', () => {
        expect(unique([1, 1, 2, 2, 3, 4, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(unique(['s', 's', 'd', 'another', 'happy', 'happy'])).toEqual([
            's',
            'd',
            'another',
            'happy',
        ]);
    });

    it('should return unique elements for objects and arrays', () => {
        expect(
            unique([
                [1, 2, 3],
                [1, 2, 3],
                { key: 'value', nested: { key: 'object' } },
                { key: 'value', nested: { key: 'object' } },
                'string',
                'string',
                1,
                1,
                2,
            ])
        ).toEqual([[1, 2, 3], { key: 'value', nested: { key: 'object' } }, 'string', 1, 2]);
    });
});
