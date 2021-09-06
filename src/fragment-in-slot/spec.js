it("fragment elements", function (done) {
    // [inject] init

    var container = wrap.getElementsByClassName('container')[0];
    expect(container.children[0].innerHTML).toContain('1');
    expect(container.children[1].innerHTML).toContain('2');
    expect(container.children.length).toBe(2);

    myComponent.data.set('lists', [2, 1]);

    myComponent.nextTick(function () {
        expect(container.children[0].innerHTML).toContain('2');
        expect(container.children[1].innerHTML).toContain('1');
        expect(container.children.length).toBe(2);

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});

