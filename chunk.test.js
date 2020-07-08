const chunk = require('./chunck');


// موجود بودن ماژول
test('exists', () => {
    expect(chunk).toBeDefined();
});



// تست فانکشن برعکس کننده رشته
test('chunk test', () => {
    expect(chunk([, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toEqual([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
    ]);
});