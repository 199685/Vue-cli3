<template>
    <div>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="sidebar-sticky pt-3">

                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center
                    px-3 mt-4 mb-1 text-muted">
                    <span>管理員</span>
                    <a class="d-flex align-items-center text-muted" href="#"
                     aria-label="Add a new report">

                    </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                    <li class="nav-item gray-hover" :class="{'gray-active': linkname ==='products'}"
                     @click="linkname='products'">
                        <router-link to="/admin/products" class="nav-link">
                        <i class="fas fa-box-open mr-1"></i>
                        <p class="d-inline-block m-0">產品列表</p>
                        </router-link>
                    </li>
                    <li class="nav-item gray-hover" :class="{'gray-active': linkname ==='order'}"
                     @click="linkname='order'">
                       <router-link to="/order_list" class="nav-link">

                        <i class="far fa-list-alt mr-1"></i>
                        <p class="d-inline-block m-0">訂單列表</p>
                        </router-link>
                    </li>
                    <li class="nav-item gray-hover" :class="{'gray-active': linkname ==='coupons'}"
                    @click="linkname='coupons'">
                        <router-link to="/admin/coupons" class="nav-link">
                        <i class="fas fa-ticket-alt mr-1"></i>
                         <p class="d-inline-block m-0">優惠券</p>
                        </router-link>
                    </li>
                    </ul>
                    <h6 class="sidebar-heading d-flex justify-content-between
                    align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>模擬功能</span>
                    <a class="d-flex align-items-center text-muted" href="#"
                     aria-label="Add a new report">

                    </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                    <li class="nav-item gray-hover"
                    :class="{'gray-active': linkname ==='customer_order'}"
                    @click="linkname='customer_order'">
                        <router-link to="/customer_order" class="nav-link">

                        <i class="fas fa-shopping-cart mr-1"></i>
                        <p class="d-inline-block m-0">模擬訂單</p>
                        </router-link>
                    </li>
                    </ul>
                </div>
        </nav>
    </div>
</template>

<script>
export default {

  data() {
    return {
      linkname: '',
    };
  },


};

</script>
