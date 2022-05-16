it("template component outer style merge inner style", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];

    expect(/width\s*:\s*30px/i.test(b.style.cssText)).toBeTruthy();
    expect(/height\s*:\s*10px/i.test(b.style.cssText)).toBeTruthy();
    expect(/display\s*:\s*block/i.test(b.style.cssText)).toBeTruthy();

    myComponent.data.set('sty', "height:20px");
    myComponent.data.set('styi', "width:15px;");

    myComponent.nextTick(function () {
        expect(/width\s*:\s*15px/i.test(b.style.cssText)).toBeTruthy();
        expect(/height\s*:\s*20px/i.test(b.style.cssText)).toBeTruthy();
        expect(/display\s*:\s*block/i.test(b.style.cssText)).toBeFalsy();

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});
