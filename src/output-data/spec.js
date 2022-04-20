it("output data", function (done) {
    // [inject] init

    var divWithSHtml = wrap.querySelector('#output-data-outer > div > p');
    expect(divWithSHtml.innerHTML).toBe('The Last of the Mohicans is a 1992 American epic historical drama film set in 1757 during the French and Indian War. ');

    myComponent.data.set('content', '123');

    san.nextTick(function () {
        divWithSHtml = wrap.querySelector('#output-data-outer > div')
        expect(divWithSHtml.innerHTML).toBe('123')

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });

});


