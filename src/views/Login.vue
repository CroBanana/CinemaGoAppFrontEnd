<template>
  
  
  <div class="container" id="login">
    <h1>Login to CinemaGo</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
            <p>{{email}}</p>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="lozinka"
            />
            <p>{{lozinka}}</p>
            <p>email postoji: {{emailExists}}       ,password postoji:{{passwordExists}}</p>
          </div>
          <button v-on:click="tryToLogin">Login</button>
          <!--<button type="submit" class="btn btn-primary">Login</button>-->
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
  
</template>

<script>
import axios from "axios"
//const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
    el: "#login",
  data: function() {
    return {
      
        email: null,
        lozinka: null,
      
      
      emailExists: null,
      passwordExists: null,
      isAdmin:null
    };
  },
  methods: {
    tryToLogin: function() {
      if (this.email == null) this.username = "";
      if (this.lozinka == null) this.lozinka = "";
      

      console.log("it sould run");
      console.log(this.email+"    " + this.lozinka)
      //const params = {"test1": this.email, "test2": this.lozinka}
      axios.request({
        method:"POST",
        url:"https://cinema-app2.herokuapp.com/db/login",
        params:{ email:this.email, lozinka:this.lozinka}})
        .then(res => {
          //console.log(res);
          console.log(res.data)
          this.passwordExists=res.data.passwordRes
          this.emailExists = res.data.emailRes
          this.isAdmin = res.data.isAdmin
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped></style>
