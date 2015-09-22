import ServerActionCreators from "../actions/server-actions.js";
import axios from "axios";

module.exports = {

    //
    // Utility file of server actions
    //

    fetchContacts() {
        const url = "/api/contacts";
        axios.get(url)
            .then((response) => {
                const data = response.data;
                ServerActionCreators.receiveName(data.contacts);
            })
            .catch((err) => {
                console.error("Error fetching contact:", err);
            });
    },
};
