var ServerActionCreators = require("../actions/server-actions.js");

module.exports = {

    //
    // Utility file of server actions
    //

    loadName: function() {
        var url = "/api/name";
        $.ajax({"url": url, 
                "dataType": "json", 
                "type": "GET",
                "contentType": "application/json",
            success: function(data) {
                ServerActionCreators.receiveName(data);
            },
        });
    },

};