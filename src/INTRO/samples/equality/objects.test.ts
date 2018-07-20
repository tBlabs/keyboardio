test('objects', () =>
{
    expect({ foo: "bar" }).toEqual({ foo: "bar" });

    const objectsList = [
        { foo: "bar" },
        { foo: "baz" },
        { foo: "bix" },
    ];

    expect(objectsList).toContainEqual({foo: "baz"});
});