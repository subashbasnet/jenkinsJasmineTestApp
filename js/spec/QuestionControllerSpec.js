describe("ExtJS Question Form", function() {
    var app = null;
    var mainPanel = null;


    beforeEach(function() {
        // Test to see if the app loaded
        mainPanel = Ext.create('MyApp.view.Main');
    }); // before each

    it('MainView is loaded', function() {
        expect(mainPanel != null).toBeTruthy();
    });

});


