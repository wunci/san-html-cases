it("component render-only cmpt and if as root, false", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only-cmptifasroot-false');
    var myComponents = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );

    expect(myComponents['ui-c/ui-sub'].length).toBe(0);
    expect(myComponents['ui-u'].length).toBe(1);
    var uCmpt = myComponents['ui-u'][0];

    expect(uCmpt.el.tagName).toBe('U');
    expect(uCmpt.data.get('text')).toBe('errorrik@gmail.com');
    expect(uCmpt.el.innerHTML).toContain('errorrik@gmail.com');


    uCmpt.data.set('text', 'nothing');
    uCmpt.nextTick(function () {
        expect(iCmpt.el.innerHTML).toContain('nothing');

        uCmpt.dispose();
        document.body.removeChild(wrap);
        done();
    });
});