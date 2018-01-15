<template lang="html">
  <div class="">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <br>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Fullname</label>
          <input type="text" class="form-control" placeholder="Fullname">
        </div>
        <button type="submit" class="btn btn-success">Sign Up</button>
      </form>
      <br>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components:{

  }
}
</script>

<style scoped="" lang="css">
body {
}

.row > div {
  margin-top: 10%;
  margin-left: 22%;
  margin-right: 17%;
  border: #cdcdcd thin solid;
  border-radius: 3px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  align-items: center;
}
</style>
