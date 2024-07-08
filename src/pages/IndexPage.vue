<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="container">
      <div class="content">
        <div class="hangman-drawing q-mb-md">
          <svg width="200" height="250">
            <line x1="20" y1="230" x2="180" y2="230" stroke="grey" stroke-width="2" />
            <line x1="100" y1="230" x2="100" y2="20" stroke="grey" stroke-width="2" />
            <line x1="100" y1="20" x2="150" y2="20" stroke="grey" stroke-width="2" />
            <line x1="150" y1="20" x2="150" y2="50" stroke="grey" stroke-width="2" />
            <circle v-if="incorrectGuesses >= 1" cx="150" cy="70" r="20" stroke="grey" stroke-width="2" fill="none" />
            <line v-if="incorrectGuesses >= 2" x1="150" y1="90" x2="150" y2="150" stroke="grey" stroke-width="2" />
            <line v-if="incorrectGuesses >= 3" x1="150" y1="110" x2="120" y2="130" stroke="grey" stroke-width="2" />
            <line v-if="incorrectGuesses >= 4" x1="150" y1="110" x2="180" y2="130" stroke="grey" stroke-width="2" />
            <line v-if="incorrectGuesses >= 5" x1="150" y1="150" x2="130" y2="190" stroke="grey" stroke-width="2" />
            <line v-if="incorrectGuesses >= 6" x1="150" y1="150" x2="170" y2="190" stroke="grey" stroke-width="2" />
          </svg>
        </div>
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else>
          <div class="word-display text-h5 q-mb-md"> {{ displayedWord }} </div>
          <div class="hint q-mb-md">
            <div>Hint: {{ hint }} </div>
          </div>
          <div class="incorrect-guesses q-mb-md">
            Incorrect guesses: <span>{{ incorrectGuesses }} / {{ maxWrongGuesses }}</span>
          </div>
          <div class="keyboard">
            <q-btn-group>
              <q-btn v-for="letter in alphabet" :key="letter" color="primary" @click="makeGuess(letter)" :disable="guesses.includes(letter)">{{ letter }}</q-btn>
            </q-btn-group>
          </div>
        </div>
      </div>
    </div>
    <GameResultModal :status="statusMessage" :isOpen="showModal" :secretWord="secretWord" @update:isOpen="val => showModal = val" @tryAgain="resetGame"/>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import GameResultModal from '../components/GameResultModal.vue';

let loading = ref(false);
let displayedWord = ref('');
let guesses = ref([]);
let secretWord = '';
let statusMessage = ref('');
const maxWrongGuesses = 6;
let incorrectGuesses = ref(0);
let hint = ref('');
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let showModal = ref(false);

const fetchWord = async() => {
  loading.value = true;
  try{
    const response = await axios.get('https://random-word-api.vercel.app/api?words=1');
    secretWord = response.data[0];
    displayedWord.value = '_'.repeat(secretWord.length);

    const hintResponse = await axios.get(`https://api.datamuse.com/words?sp=${secretWord}&md=d`);
    if (hintResponse.data.length > 0 && hintResponse.data[0].defs){
      hint.value = hintResponse.data[0].defs[0].split('\t')[1];
    }else{
      hint.value = 'No hint available';
    }
  }catch (error){
    statusMessage.value = 'error';
    showModal.value = true;
  }finally{
    loading.value = false;
  }
};

const makeGuess = (letter) => {
  if (!guesses.value.includes(letter)){
    guesses.value.push(letter);
    if (secretWord.includes(letter.toLowerCase())){
      updateDisplayedWord();
      if (displayedWord.value === secretWord){
        statusMessage.value = 'win';
        showModal.value = true;
      }
    }else {
      incorrectGuesses.value++;
      if (incorrectGuesses.value >= maxWrongGuesses){
        statusMessage.value = 'lose';
        showModal.value = true;
      }
    }
  }
}

const updateDisplayedWord = () => {
  displayedWord.value = secretWord.split('').map(letter => (guesses.value.includes(letter.toUpperCase()) ? letter : '_')).join('');
}

const resetGame = () => {
  secretWord = '';
  displayedWord.value = '';
  guesses.value = [];
  statusMessage.value = '';
  incorrectGuesses.value = 0;
  hint.value = '';
  fetchWord();
}

onMounted(() => {
  fetchWord();
})

  </script>

  <style scoped lang="scss">
  .container{
    max-width: 600px;
    margin: auto;
  }

  .hangman-drawing{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .word-display{
    text-align: center;
    font-size: 24px;
    letter-spacing: 10px;
  }

  .hint{
    text-align: center;
    margin-bottom: 10px;
  }

  .incorrect-guesses{
    text-align: center;
    margin-bottom: 20px;
  }

  .keyboard{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .q-btn-group{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
</style>
