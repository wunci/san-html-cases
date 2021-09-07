it("slot text node", function (done) {
    // [inject] init

    var container = wrap.getElementsByTagName('p')[0];
    expect(container.innerHTML).toBe('Hello<!--s-slot-->aaaworld<span></span><!--/s-slot-->!');

    myComponent.data.set('name', 'san');

    myComponent.nextTick(function () {
        expect(container.innerHTML).toBe('Hello<!--s-slot-->aaasan<span></span><!--/s-slot-->!');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});

