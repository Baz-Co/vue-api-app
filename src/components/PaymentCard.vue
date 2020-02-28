<template>
  <t-card
    header="Electronic Payment Info"
    baseClass="mx-auto w-2/6 border-gray-500 rounded-lg border shadow-md"
    headerClass="bg-gray-300 rounded-t-lg mx-0 py-1 text-xl border-b"
  >
    <form>
      <div class="form-group">
        <div class="input-group flex">
          <label class="m-auto inline-block" for="amount">Amount: </label>
          <t-input
            type="number"
            id="amount"
            class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden"
            v-model="amount"
            name="amount"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input-group flex">
          <label class="m-auto inline-block text-right" for="cardNum"
            >Card Number:
          </label>
          <t-input
            id="cardNum"
            class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden"
            v-model="cardNum"
            name="cardNum"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input-group flex">
          <label class="m-auto inline-block" for="expDate"
            >Expiration Date:
          </label>
          <t-input
            id="expDate"
            class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden"
            v-model="expDate"
            name="my-input"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input-group flex">
          <label class="m-auto inline-block" for="cvv">CVV: </label>
          <t-input
            id="cvv"
            class="inline-block border m-2 bg-white mx-auto max-w-sm shadow-lsm rounded-sm overflow-hidden"
            v-model="cvv"
            name="my-input"
            placeholder="Enter Amount"
          />
        </div>
      </div>
    </form>
  </t-card>
</template>
