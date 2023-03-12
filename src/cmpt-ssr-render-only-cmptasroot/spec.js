it("component render-only-cmptasroot", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only-cmptasroot');
    var myComponents = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );

    expect(myComponents['ui-c/ui-sub'].length).toBe(1);
    var iCmpt = myComponents['ui-c/ui-sub'][0];

    expect(iCmpt.el.tagName).toBe('I');
    expect(iCmpt.data.get('text')).toBe('erik');

    expect(iCmpt.el.innerHTML).toContain('erik');


    iCmpt.data.set('text', 'errorrik');
    iCmpt.nextTick(function () {
        expect(iCmpt.el.innerHTML).toContain('errorrik');

        iCmpt.dispose();
        document.body.removeChild(wrap);
        done();
    });
});