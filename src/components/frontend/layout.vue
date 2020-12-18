<template>
 <div>
    <Header></Header>
   
    <router-view></router-view>
    <Footer></Footer>
</div>
</template>


<script>
import Header from './header.vue';
import Footer from './footer.vue';
export default {
  components: {
      Header,
      Footer
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexCookie\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>

<style lang="scss" scoped>
 
    
</style>
