<template lang="html">
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light boom">
      <router-link class="navbar-brand" :to="{ name: 'register' }"><strong>hacktiv overflow</strong></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'questions' }">Questions<span class="sr-only">(current)</span></router-link>
      </li>
      <form class="form-inline my-2 my-lg-0" id="search" style="margin-left:25px;">
        <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
      </form>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Already Have Account?
        </a>
        <div class="row" style="width: 300px; padding-right:30%;">
          <div class="col-md-12">
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="width: 300px; padding-right:30%;">
              <a class="dropdown-item" href="#" style="padding-left:5%;">Login</a>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" style="margin-left:10px;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <input type="password" style="margin-left:10px;" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary btn-sm" style="margin-left:5%;">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped="" lang="css">

<style>
