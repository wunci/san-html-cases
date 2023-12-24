it("TemplateComponent Attribute Inherit disable", function (done) {
    // [inject] init

    var innerComponent = myComponent.ref('inner');
    expect(innerComponent.data.get('$attrs').title).toContain('Hahaha');
    expect(innerComponent.data.get('$attrs')['data-t']).toContain('state:Hahaha');

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.innerHTML).toContain('Hahaha');
    expect(span.hasAttribute('title')).toBeFalsy();
    expect(span.hasAttribute('data-t')).toBeFalsy();
    expect(span.className).not.toContain('a');
    expect(span.id).not.toContain('happy');
    expect(span.style.display).not.toContain('none');


    myComponent.data.set('text', 'Wuwuwu');

    myComponent.nextTick(function () {
        expect(span.innerHTML).toContain('Wuwuwu');
        expect(span.hasAttribute('title')).toBeFalsy();
        expect(span.hasAttribute('data-t')).toBeFalsy();
        expect(span.className).not.toContain('a');
        expect(span.id).not.toContain('happy');
        expect(span.style.display).not.toContain('none');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});