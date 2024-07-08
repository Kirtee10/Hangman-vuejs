<template>
  <q-dialog v-model="internalIsOpen" persistent>
    <q-card class="fixed-card">
      <q-card-section class="q-pa-lg text-center">
        <div v-if="status === 'win'">
          <h2>Congratulations, You Won!</h2>
        </div>
        <div v-if="status === 'lose'">
          <h2>Sorry, You Lost!</h2>
          <p>The word was: {{  secretWord }}</p>
        </div>
        <div v-else-if="status === 'error'">
          <h2>Oops! Something went wrong</h2>
          <p>Failed to fetch the word. Please try again.</p>
        </div>
      </q-card-section>
      <q-card-actions align="center" class="q-mb-md">
        <q-btn color="primary" @click="onTryAgain">Try Again</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({isOpen: Boolean, status: String, secretWord: String});

const internalIsOpen = ref(props.isOpen);

const emits = defineEmits(['update:isOpen', 'tryAgain']);

const onTryAgain = () => {
  emits('tryAgain');
  emits('update:isOpen', false);
}

watch(() => props.isOpen, (newVal) => {
  internalIsOpen.value = newVal;
});

watch(internalIsOpen, (newVal) => {
  emits('update:isOpen', newVal);
});

</script>
