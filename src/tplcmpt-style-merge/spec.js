it("template component outer style merge inner style", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];
    expect(b.style.cssText).toContain('1rem;');
    expect(b.style.cssText).toContain('10px');
    expect(b.style.cssText).toContain('block');

    myComponent.data.set('sty', "height:20px");
    myComponent.data.set('styi', "width:15px;");

    myComponent.nextTick(function () {
        expect(b.style.cssText).toContain('20px');
        expect(b.style.cssText).toContain('15px');
        expect(b.style.cssText).toContain('width');
        expect(b.style.cssText).not.toContain('block');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});
