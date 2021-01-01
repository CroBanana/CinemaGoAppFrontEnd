<template>
  <div class="container">
    <h1>Register to CinemaGo</h1>
    <br />
    <br />
    <div class="row" id="register">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Full Name"
              v-model="stuff.name"
            />
            <p>{{stuff.name}}</p>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="stuff.email"
            />
            <p>{{stuff.email}}</p>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="stuff.password"
            />
            <p>{{stuff.password}}</p>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="reenterPassword"
              placeholder="Reenter Password"
              v-model="stuff.passwordR"
            />
            <p>{{stuff.passwordR}}</p>
          </div>
          <br />
          <button v-on:click="register">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
  el: "#register",
  data: function () {
    return {
      stuff:{
      name:null,
      email : null,
      password : null,
      passwordR : null
      }
    };
  },
  methods:{
    register: function(){
      if(this.stuff.password != this.stuff.passwordR){
        console.log("passwords dont match")
      }else{
        axios.request({
        method:"POST",
        url:"http://localhost:3000/db/register",
        params: this.stuff})
        .then(res => {
          //console.log(res);
          console.log(res.data)
          this.passwordExists=res.data.passwordRes
          this.passwordExists = res.data.emailRes
        })
        .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style scoped></style>
