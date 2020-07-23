it("fragment elements", function (done) {
    // [inject] init

    expect(wrap.getElementsByTagName('b')[1].innerHTML).toBe('San');
    expect(wrap.innerHTML).toContain('Hello');

    myComponent.data.set('name', 'JQuery');

    myComponent.nextTick(function () {
        expect(wrap.getElementsByTagName('b')[1].innerHTML).toBe('JQuery');
        expect(wrap.innerHTML).toContain('Hello');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});

