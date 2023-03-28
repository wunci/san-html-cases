it("component render-only-slot2", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only-slot2');
    var hydrateResult = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );
    expect(hydrateResult.renderOnly).toBeTruthy();
    var myComponents = hydrateResult.components;

    expect(myComponents['ui-u'].length).toBe(1);
    expect(myComponents['ui-c'].length).toBe(1);
    var iCmpt = myComponents['ui-c'][0];
    var uCmpt = myComponents['ui-u'][0];

    expect(iCmpt.el.tagName).toBe('P');
    expect(uCmpt.el.tagName).toBe('U');
    expect(iCmpt.data.get('dt')).toBe('erik');
    expect(uCmpt.data.get('text')).toBe('errorrik@gmail.com');

    expect(iCmpt.el.innerHTML).toContain('erik');
    expect(uCmpt.el.innerHTML).toContain('errorrik@gmail.com');


    iCmpt.data.set('dt', 'errorrik');
    iCmpt.nextTick(function () {
        expect(iCmpt.el.innerHTML).toContain('errorrik');

        iCmpt.dispose();
        uCmpt.dispose();
        document.body.removeChild(wrap);
        done();
    });
});