const reverseString = require('./reverseString');



// موجود بودن ماژول
test('exists', () => {
    expect(reverseString).toBeDefined();
});



// تست فانکشن برعکس کننده رشته
test('reverse test', () => {
    expect(reverseString('HellO')).toEqual('olleh');
});