it("array literal with spread", function (done) {
    // [inject] init

    var lis = wrap.getElementsByTagName('li');
    expect(lis.length).toBe(3);

    expect(lis[0].innerHTML).toBe('1. 1');
    expect(lis[1].innerHTML).toBe('2. true');
    expect(lis[2].innerHTML).toBe('3. erik');
    myComponent.data.set('ext', [3, 4]);
    myComponent.data.set('ext2', [5, 6]);
    san.nextTick(function () {
        var lis = wrap.getElementsByTagName('li');
        expect(lis.length).toBe(7);

        expect(lis[0].innerHTML).toBe('1. 1');
        expect(lis[1].innerHTML).toBe('2. true');
        expect(lis[4].innerHTML).toBe('5. erik');
        expect(lis[2].innerHTML).toBe('3. 3');
        expect(lis[3].innerHTML).toBe('4. 4');

        expect(lis[5].innerHTML).toBe('6. 5');
        expect(lis[6].innerHTML).toBe('7. 6');

        myComponent.dispose();
        document.body.removeChild(wrap);

        done();
    });
});
