<template>
  <div class="tw-p-4">
    <div class="tw-flex tw-justify-between tw-items-center">
      <span class="tw-font-bold tw-text-base">Sale Information</span>
      <b-button variant="primary">Export to Excel</b-button>
    </div>
    <div class="tw-p-4">
      <div class="tw-border-b-2 tw-border-grey-100">
        <b-table-simple responsive borderless>
          <b-thead>
            <b-tr>
              <b-th></b-th>
              <b-td class="tw-align-middle">Company Code</b-td>
              <b-td class="tw-align-middle">Registration Plate</b-td>
              <b-th></b-th>
              <b-td class="tw-align-middle">Start</b-td>
              <b-td class="tw-align-middle">End</b-td>
              <b-th></b-th>
              <b-th></b-th>
              <b-th></b-th>
              <b-td
                ><b-button variant="outline-primary" class="tw-w-full"
                  >Filter</b-button
                ></b-td
              >
            </b-tr>
            <b-tr variant="secondary">
              <b-th>Date</b-th>
              <b-th>Company Name</b-th>
              <b-th>Registration Plate</b-th>
              <b-th>Item Description</b-th>
              <b-th>Start</b-th>
              <b-th>End</b-th>
              <b-th>Charging Time</b-th>
              <b-th>kWh charged</b-th>
              <b-th>Unit Cost</b-th>
              <b-th>Price</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr variant="warning">
              <b-td>02/12/2021</b-td>
              <b-td>Company AAAA</b-td>
              <b-td>nn 1234</b-td>
              <b-td>Charging Fee</b-td>
              <b-td>4:30PM</b-td>
              <b-td>5:54PM</b-td>
              <b-td>1h 24 min</b-td>
              <b-td>50</b-td>
              <b-td>7/kWh</b-td>
              <b-td>350</b-td>
            </b-tr>
            <b-tr>
              <b-td>02/12/2021</b-td>
              <b-td>Company AAAA</b-td>
              <b-td>nn 1234</b-td>
              <b-td>Charging Fee</b-td>
              <b-td>4:30PM</b-td>
              <b-td>5:54PM</b-td>
              <b-td>1h 24 min</b-td>
              <b-td>50</b-td>
              <b-td>7/kWh</b-td>
              <b-td>350</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
      <div class="tw-bg-grey-100 tw-p-3 tw-mt-4">
        <div class="tw-font-bold">Summary:</div>
        <div>Charging Time: <span class="tw-font-bold">2h 48 min</span></div>
        <div>kWh charged: <span class="tw-font-bold">100</span></div>
        <div>Price: <span class="tw-font-bold">700</span></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
