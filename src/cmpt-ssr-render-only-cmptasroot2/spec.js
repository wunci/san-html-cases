it("component render-only-cmptasroot2", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only-cmptasroot2');
    var myComponents = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );

    expect(myComponents['ui-c'].length).toBe(1);
    var iCmpt = myComponents['ui-c'][0];

    expect(iCmpt.el.tagName).toBe('P');
    expect(iCmpt.data.get('dt')).toBe('erik');

    expect(iCmpt.el.firstChild.innerHTML).toContain('erik');


    iCmpt.data.set('dt', 'errorrik');
    iCmpt.nextTick(function () {
        expect(iCmpt.el.firstChild.innerHTML).toContain('errorrik');

        iCmpt.dispose();
        document.body.removeChild(wrap);
        done();
    });
});