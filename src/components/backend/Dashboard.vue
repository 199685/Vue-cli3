<template>
 <div>
   <keep-alive>
          <Navbar/>
    </keep-alive>

    <Alert></Alert>
    <div class="container-fluid">
        <div class="row">
            <keep-alive>
              <Sidebar></Sidebar>
            </keep-alive>


                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-5">
                    <router-view></router-view>

                </main>

        </div>
    </div>
</div>
</template>


<script>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import Alert from '../AlertMessage.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexCookie\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
    // console.log("123",myCookie)
  },
};
</script>
