it("component render-only", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only');
    var myComponents = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );

    expect(myComponents['ui-u']).toBe(1);
    expect(myComponents['ui-c/ui-sub']).toBe(1);
    var iCmpt = myComponents['ui-c/ui-sub'][0];
    var uCmpt = myComponents['ui-u'][0];

    expect(iCmpt.el.tagName).toBe('I');
    expect(uCmpt.el.tagName).toBe('U');
    expect(iCmpt.data.get('text')).toBe('erik');
    expect(uCmpt.data.get('text')).toBe('errorrik@gmail.com');

    expect(iCmpt.el.innerHTML).toContain('erik');
    expect(uCmpt.el.innerHTML).toContain('errorrik@gmail.com');


    iCmpt.data.set('text', 'errorrik');
    myComponent.nextTick(function () {
        expect(iCmpt.el.innerHTML).toContain('errorrik');

        iCmpt.dispose();
        uCmpt.dispose();
        document.body.removeChild(wrap);
        done();
    });
});