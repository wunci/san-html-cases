it("JavaScript escaped s-data content", function () {
    // [inject] init

    var data = myComponent.data;

    expect(data.get('num')).toEqual(-0.1);
    expect(data.get('arr')).toContain('---')
    expect(data.get('obj')['-->']).toEqual('-->')
});

