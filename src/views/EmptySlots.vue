<template>
  <!-- <Layout> -->
    <t-card
      header="Electronic Payment Info"
      baseClass="mx-auto w-2/6 border-gray-500 rounded-lg border shadow-md"
      headerClass="bg-gray-300 rounded-t-lg mx-0 py-1 text-xl border-b"
    >
      <form>
        <div class="form-group">
          <div class="input-group flex">
            <label class="m-auto inline-block" for="amount">Amount: </label>
            <t-input type="number" id="amount" class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden" v-model="amount" name="amount" placeholder="Enter Amount" />
          </div>
          <div class="input-group flex">
            <label class="m-auto inline-block text-right" for="cardNum">Card Number: </label>
            <t-input id="cardNum" class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden" v-model="cardNum" name="cardNum" placeholder="Enter Amount" />
          </div>
          <div class="input-group flex">
            <label class="m-auto inline-block" for="expDate">Expiration Date: </label>
            <t-input id="expDate" class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden" v-model="expDate" name="my-input" placeholder="Enter Amount" />
          </div>
          <div class="input-group flex">
            <label class="m-auto inline-block" for="cvv">CVV: </label>
            <t-input id="cvv" class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden" v-model="cvv" name="my-input" placeholder="Enter Amount" />
          </div>
        </div>
      </form>
    </t-card>
  <!-- </Layout> -->
</template>

<script>
import Vue from "vue"
import { Component } from "vue-property-decorator"
// import Layout from "./Layout"
// import Settings from "./Settings"
// import { Header, Footer, Content, Dogs, Three } from "./components";

@Component({})
export default class EmptySlot extends Vue {
  amount = 0;
  cardNum = 0;
  expDate = 0;
  cvv = 0;
}
//   props: {
//     message: {
//       default: "Hello from default prop component definition"
//     },
//     header: {
//       default: "Header from default prop in App"
//     },
//     names: {
//       default: ["mindy", "john", "kim", "joel", "maggie"]
//     }
//   },
//   components: {
//     Layout,
//     Settings,
//     AHeader: Header,
//     AFooter: Footer,
//     AContent: Content,
//     Cats,
//     Dogs
//   }
// })
// export default class App extends Vue {
</script>