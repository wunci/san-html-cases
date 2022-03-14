it("render root multi component", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];
    expect(b.innerHTML).toBe('0');
    expect(wrap.getElementsByTagName('u').length).toBe(0);

    myComponent.data.set('num', 10);
    myComponent.nextTick(function () {
        var u = wrap.getElementsByTagName('u')[0];
        expect(u.innerHTML).toBe('10');
        expect(wrap.getElementsByTagName('b').length).toBe(0);

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});
