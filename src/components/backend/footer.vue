<template>
    <div>
          <div class="footer">
                <div class="footer-logo py-5 text-center">
                    <img src="./styles/images/logo-1.png" alt="" width="100">
                    <h2 class="text-c1">HAPPY FRUIT</h2>
                    <div class="social h5 pointer">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram-square"></i>
                    </div>
                    <p class="text-c1">since 1996</p>
                </div>
            </div>

    </div>
</template>

<script>


export default {
  data() {
    return {


    };
  },
  components: {

  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
   .footer {
    box-shadow: 0 3px 5px 4px $c3;
    background: rgb(240, 135, 135);
    background: linear-gradient(196deg, rgba(240, 135, 135, 0.2497373949579832) 57%,
    rgba(34, 226, 117, 0.12648809523809523) 58%);
}

.pointer{
    cursor: pointer;
}
.social{
    i{
        transition: all .3s;
        &:hover{
            color: $c1;
            transform: scale(1.2);
        }
    }
}

</style>
