<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-c5 flex-md-nowrap p-0 shadow">
      <a class="navbar-brand w-100 mr-0 pl-3" href="#">Company name</a>
     <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-light" href="#" @click.prevent=" signout()">
          Sign out<i class="fas fa-sign-out-alt pl-2"></i></a>
        </li>
      </ul>
    </nav>


  </div>


</template>


<script>
export default {
  name: 'Navbar',
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/logout`;
      this.$http.post(url).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push('/sigin');
        }
      });
    },
  },
};
</script>
