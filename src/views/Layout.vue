<template>
  <div class="flex flex-col h-screen">
    <div class="mb-4" />      
    <slot name="payment-card">
      <p class="text-red-600">Page needs a payment dialog component.</p>
    </slot>
    <slot name="payment-table">
      <div class="mt-4">Payment Transactions Table</div>
    </slot>
    <slot name="vert-spacer">
      <div class="text-red flex-grow items-start" />
    </slot>
  </div>
</template>
