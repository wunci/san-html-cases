it("render root multi component", function (done) {
    // [inject] init

    var div = wrap.getElementsByTagName('div')[1];
    expect(div.innerHTML).toBe('0');
    expect(wrap.getElementsByTagName('u').length).toBe(0);

    myComponent.data.set('num', 10);
    myComponent.nextTick(function () {
        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML).toBe('10');
        expect(wrap.getElementsByTagName('b').length).toBe(0);

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});
