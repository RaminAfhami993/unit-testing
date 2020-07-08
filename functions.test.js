const functions = require('./functions')

// برابری
test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
});
// عدم برابری
test('add 2 + 2 to not be 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


// null بودن
test('is null', () => {
    expect(functions.isNull()).toBeNull();
});


// undefiend بودن
test('is undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});
// undefined نبودن
test('is undefined', () => {
    expect(functions.isUndefined()).not.toBeNull();
});


// false بودن
test('falsey', () => {
    expect(functions.falsy(0)).toBeFalsy();
});


// true بودن
test('truthy', () => {
    expect(functions.truthy(1)).toBeTruthy();
});


// برابری آبجکت
test('check object', () => {
    expect(functions.createUser()).toEqual({name: "ramin", age: 20})
});


// کمتر بودن
test('less than', () => {
    const a = 700;
    const b = 800;
    expect(a + b).toBeLessThan(1600);
});
// کمتر یا برابر بودن
test('less than', () => {
    const a = 700;
    const b = 800;
    expect(a + b).toBeLessThanOrEqual(1500);
});
// بیشتر بودن
test('less than', () => {
    const a = 700;
    const b = 800;
    expect(a + b).toBeGreaterThan(1200);
});
// بیشتر یا برابر بودن
test('less than', () => {
    const a = 700;
    const b = 800;
    expect(a + b).toBeGreaterThanOrEqual(1500);
});


// برابری اعداد اعشاری
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;    
    //expect(value).toBe(0.3); This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});


// عدم وجود یک مقدار در رشته regex
test('no exist', () => {
    expect('team').not.toMatch(/i/i);
});

// آرایه
test('array contain 3', () => {
    const numbers = [1, 3];
    expect(numbers).toContain(3)
});


// promise
test('promise test', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toBe('Leanne Graham');
    });
});
// async await
test('promise test', async () => {
    const data = await functions.fetchUser();
    expect(data.name).toBe('Leanne Graham');
});


