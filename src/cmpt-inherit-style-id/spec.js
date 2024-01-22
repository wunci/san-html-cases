it("Component Attribute Inherit id、class、style", function (done) {
    // [inject] init

    var spanA = wrap.getElementsByTagName('span')[0];
    expect(spanA.innerHTML).toContain('Hahaha');
    expect(spanA.getAttribute('class')).toBe('inner');
    expect(spanA.getAttribute('id')).toBe('inner');
    expect(spanA.getAttribute('style').includes('background: green')).toBeTruthy();
    expect(spanA.getAttribute('style').includes('color: red')).toBeFalsy();

    var spanB = wrap.getElementsByTagName('span')[1];
    expect(spanB.getAttribute('class')).toBe('inner');
    expect(spanB.getAttribute('id') == null).toBeTruthy();
    expect(spanA.getAttribute('style').includes('background: green')).toBeTruthy();
    expect(spanA.getAttribute('style').includes('color: red')).toBeFalsy();

    var spanC = wrap.getElementsByTagName('span')[2];
    expect(spanC.getAttribute('class')).toBe('inner outer');
    expect(spanA.getAttribute('id')).toBe('inner');
    expect(spanA.getAttribute('style').includes('background: green')).toBeTruthy();
    expect(spanA.getAttribute('style').includes('color: red')).toBeFalsy();

    done();
});