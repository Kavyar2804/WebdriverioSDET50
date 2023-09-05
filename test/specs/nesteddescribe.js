describe('1st', () => {
    before(() => {
        console.log("befor inside outer describe");
    });
    
    describe('2nd', () => {

        it('trail', () => {
            console.log('it block 1');
            
        });
        
        describe('3rd', () => {

            before(() => {
                console.log("befor inside inner describe");
            });

            it('trail', () => {
                console.log('it block');
                
            });
            
        });
    });
});