
const axios = require('axios').default;

var login = new Vue({
  el: "#login",
  data: function() {
    return {
      username: null,
      lozinka: null
    };
  },
  methods: {
    fun: function() {
      if (this.username == null) this.username = "";
      if (this.password == null) this.password = "";

      console.log("it sould run");
      axios
        .post(`http://localhost:3000/db/login`, {
          params: { username: this.username, pasword: this.password }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }
});
