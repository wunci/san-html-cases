it("Component Attribute Inherit bool value and bool attr", function (done) {
    // [inject] init


    var btn = wrap.getElementsByTagName('button')[0];
    expect(btn.getAttribute('title')).toBe('Hahaha');
    expect(btn.disabled).toBeTruthy();
    expect(btn.getAttribute('data-disabled')).toBe('true');

    myComponent.data.set('ed', 'false');

    myComponent.nextTick(function () {
        expect(btn.disabled).toBeTruthy();
        expect(btn.getAttribute('data-disabled')).toBe('false');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});