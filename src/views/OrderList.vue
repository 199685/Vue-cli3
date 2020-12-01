<template>
  <div>
    <loading :active.sync="isLoading">
         <div class="loadingio-spinner-spin-5xz8vi7q1c2"><div class="ldio-2zmxuno6hnw">
            <div><div></div></div><div><div></div></div><div>
            <div></div></div><div><div></div></div><div><div>
            </div></div><div><div></div></div><div><div></div></div><div><div></div></div>
          </div></div>
    </loading>

    <div class="table-responsive-md mt-7">
      <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="300">Email</th>
          <th>客戶名稱</th>
          <th>聯絡電話</th>
          <th class="min-width-350">購買款項</th>
          <th width="100">應付金額</th>
          <th>是否付款</th>
          <th width="100">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>{{ item.paid_date | date}}</td>
          <td>{{ item.user.email }}</td>
          <td>{{ item.user.name }}</td>
          <td>
            {{ item.user.tel}}
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id" class="text-left">
                {{ product.product.title }} <span class="pl-1">數量：</span>
                {{ product.qty }}{{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">
            {{ item.total | currency}}
          </td>
          <td>
             <span v-if="item.is_paid" class="text-success">已付款</span>

            <span v-else class="text-danger">未付款</span>
          </td>


           <td>
               <div class="btn-group d-block d-md-flex" role="group" aria-label="Third group">
                 <button class="btn btn-outline-primary btn-sm"
                 @click="openModal('edit', item)">編輯</button>

              </div>

          </td>
        </tr>
      </tbody>
    </table>
    </div>
   <Page :pagination="pagination" @products-getProducts="getorders"></Page>

    <!-- Modal -->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>訂單列表</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">

              <div class="col">
              <div class="form-row">

                <div class="form-group col-md-6">
                  <label for="paid_date">購買日期</label>
                  <input type="text" class="form-control" id="paid_date"
                    placeholder="請輸入購買日期" v-model="paid_date">
                </div>
                <div class="form-group col-md-6">

                  <label for="is_paid">是否付款</label>
                  <input type="text" class="form-control" id="is_paid"
                    placeholder="請輸入是否付款" v-model="tempOrder.is_paid">
                </div>
              </div>


                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">客戶名稱</label>
                    <input type="text" class="form-control" id="name"
                      placeholder="請輸入客戶名稱" v-model="tempOrder.user.name">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="tel">聯絡電話</label>
                    <input type="tel" class="form-control" id="tel"
                      placeholder="請輸入聯絡電話" v-model="tempOrder.user.tel">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-8">
                  <label for="email">Email</label>
                    <input type="text" class="form-control" id="email"
                      placeholder="請輸入Email" v-model="tempOrder.user.email">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="total">應付金額</label>
                    <input type="number" class="form-control" id="total"
                      placeholder="請輸入應付金額" v-model="tempOrder.total">
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="upOrders">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="delorderModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="upOrders()"
              >確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page from '../components/Pagination.vue';
/* eslint-env jquery */
export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {
        create_at: '',
        id: '',
        is_paid: '',
        message: '',
        paid_date: '',
        payment_method: '',
        products: {

        },
        total: '',
        user: {
          address: '',
          email: '',
          name: '',
          tel: '',
        },
        num: '',
      },
      paid_date: '',
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    Page,
  },
  methods: {
    getorders(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew === 'edit') {
        this.tempOrder = Object.assign({}, item);
        this.isNew = 'edit';
        const newDate = new Date(this.tempOrder.paid_date);
        const year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDate();
        if (month < 10) {
          month = 0 + String(month);
        }
        if (day < 10) {
          day = 0 + String(day);
        }
        this.paid_date = `${year}-${month}-${day}`;
      }
      if (this.isNew !== 'delete') {
        // eslint-disable-next-line
        $('#orderModal').modal('show');
      }
    },
    upOrders() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order`;
      const vm = this;
      const httpMethod = 'put';

      if (vm.isNew === 'edit') {
        api = `${api}/${vm.tempOrder.id}`;
      }


      this.$http[httpMethod](api, { data: vm.tempOrder }).then((response) => {
        if (response.data.success) {
          if (vm.isNew !== 'delete') {
            $('#orderModal').modal('hide');
          }
          vm.getorders();
        } else {
          // 失敗了
        }
      });
    },

  },
  created() {
    this.getorders();
  },
  watch: {
    paid_date() {
      const vm = this;
      vm.tempOrder.paid_date = new Date(vm.paid_date).getTime();
    },
  },
};
</script>

<style scoped>
#customFile{
  width: 108%;
}
.min-width-350{
  min-width: 350px;
}

</style>
