it("fragment in slot", function (done) {
    // [inject] init

    var container = wrap.getElementsByTagName('a')[0];
    var bs = wrap.getElementsByTagName('b');
    expect(bs[0].innerHTML).toContain('1');
    expect(bs[1].innerHTML).toContain('2');
    expect(bs[0].parentNode).toBe(container);
    expect(bs[1].parentNode).toBe(container);

    myComponent.data.set('lists', [2, 1]);

    myComponent.nextTick(function () {
        expect(bs[0].innerHTML).toContain('2');
        expect(bs[1].innerHTML).toContain('1');
        expect(bs[0].parentNode).toBe(container);
        expect(bs[1].parentNode).toBe(container);

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});

