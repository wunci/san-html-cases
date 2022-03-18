it("render root multi component", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];
    expect(b.innerHTML).toBe('0');
    expect(wrap.getElementsByTagName('p').length).toBe(0);

    myComponent.data.set('num', 10);
    myComponent.nextTick(function () {
        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML).toBe('10');
        expect(wrap.getElementsByTagName('a').length).toBe(0);

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});
