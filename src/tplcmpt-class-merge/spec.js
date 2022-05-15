it("template component outer class merge inner class", function (done) {
    // [inject] init

    expect(myComponent.ref('child').el.className).toContain('outer1');
    expect(myComponent.ref('child').el.className).toContain('in1');
    myComponent.data.set('clz', ['inn1', 'inn2']);

    myComponent.nextTick(function () {
        expect(myComponent.ref('child').el.className).toBe('inn1 inn2 outer1 outer2');
        myComponent.data.set('clazz', '');

        myComponent.nextTick(function () {
            expect(myComponent.ref('child').el.className).toBe('inn1 inn2');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });
});
