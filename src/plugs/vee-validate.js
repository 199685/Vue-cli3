import Vue from 'vue';
import {
    ValidationObserver, ValidationProvider, extend, localize, configure,
} from 'vee-validate';

import TW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    },
});

// 匯入語系檔案
// import zh_TW from './zh_TW.js';

// 加入至 VeeValidate 的設定檔案
// VeeValidate.localize('tw', zh_TW);