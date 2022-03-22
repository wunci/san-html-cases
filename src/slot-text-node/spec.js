it("slot text node", function (done) {
    // [inject] init

    var container = wrap.getElementsByTagName('p')[0];
    expect(
        /Hello<!--s-slot-->aaaworld<span><\/span><!--\/s-slot-->!/i.test(container.innerHTML)
    ).toBeTruthy();

    myComponent.data.set('name', 'san');

    myComponent.nextTick(function () {
        expect(
            /Hello<!--s-slot-->aaasan<span><\/span><!--\/s-slot-->!/i.test(container.innerHTML)
        ).toBeTruthy();

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});

