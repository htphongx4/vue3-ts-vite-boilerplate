<template>
  <!-- Modal -->
  <div
    id="exampleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">Do you want to add new charger ?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Ok
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-p-4">
    <div class="tw-flex tw-justify-between tw-items-center">
      <span class="tw-font-bold tw-text-base">New Charger Information</span>
      <b-button
        variant="primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        >Save</b-button
      >
    </div>
    <div class="tw-p-4 tw-w-1/2">
      <ChargerInput
        v-model="chargerName"
        label-input="Charger Name"
        required-field
      />
      <ChargerInput
        v-model="chargerNumber"
        label-input="Charger Number"
        required-field
      />
      <ChargerInput v-model="chargerModel" label-input="Model" required-field />
      <ChargerInput
        v-model="chargerLocation"
        label-input="Location"
        required-field
      />
      <div class="tw-flex">
        <div class="tw-font-bold tw-mr-4">
          Status<span class="tw-text-primary">*</span>
        </div>
        <div class="form-check form-switch tw-flex">
          <input
            id="flexSwitchCheckDefault"
            v-model="switchStatus"
            class="form-check-input"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ChargerInput from "@/components/common/charger-input/index.vue";

const chargerName = ref("");
const chargerNumber = ref("");
const chargerModel = ref("");
const chargerLocation = ref("");
const switchStatus = ref(false);
</script>
