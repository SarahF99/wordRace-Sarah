<template>
  <div>
    <div class="p-grid p-jc-center p-my-3">
      <div class="p-col-12 p-sm-10 p-md-8 p-lg-6">
        <div class="box p-shadow-6">
          <b>Instructions</b> <br />
          1. Start a New Game.<br />
          2. Type the word shown in bold.<br />
          3. Press space after typing a word to move onto the next one.<br />
          4. The next words are shown to the left.<br />
          5. Words you just typed are shown to the right.
        </div>
      </div>
    </div>
    <Button
      :label="gameRunning ? 'End Game' : 'New Game'"
      @click="toggleGame"
      :class="`p-my-2 ${gameRunning ? 'p-button-info' : ''}`"
    />
    <div class="p-grid p-jc-center p-my-3">
      <div class="p-col-12 p-sm-10 p-md-8 p-lg-2 p-xl-2">
        <div class="box p-shadow-6">
          Score: <span class="p-text-bold">{{ score }}</span>
        </div>
      </div>
    </div>
    <div class="p-grid p-jc-center p-my-3">
      <div class="p-col-12 p-sm-10 p-md-8 p-lg-6">
        <ProgressBar :value="progressPercentage"
          ><span style="color: white"
            >Time Remaining: {{ timeRemaining }}</span
          ></ProgressBar
        >
      </div>
    </div>

    <div class="p-grid p-jc-center p-my-3">
      <div class="p-col-12 p-sm-10 p-md-8 p-lg-6">
        <div class="box p-shadow-6">
          <div class="p-grid p-jc-center">
            <div
              class="p-col"
              v-for="(word, i) in words.slice(-3)"
              :key="i"
              :class="i == 2 ? 'p-text-bold' : ''"
            >
              {{ word }}
            </div>
            <div
              class="p-col"
              v-for="(word, i) in completedWordsToShow"
              :key="i"
            >
              <span
                :style="
                  `color: ${word.entered == word.target ? 'limegreen' : 'red'}`
                "
                >{{ word.entered }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-grid p-jc-center p-mt-4">
      <div class="p-field">
        <span class="p-float-label">
          <input
            class="p-inputtext p-component"
            v-model="entry"
            name="inputtext"
            id="inputtext"
            label="type here"
            type="text"
            :disabled="!gameRunning"
            ref="wordInput"
            @keydown.space="checkWord"
          />
          <label for="inputtext">Type here!</label>
        </span>
      </div>
    </div>
  </div>
  <br/> 
  <div className="">
							Designed and built with
							<span role="img" aria-label="Heart">
								
								❤️
							</span>
							by Sarah
							
						</div>
</template>

<script>
  const randomWords = require("random-words");
  export default {
    data() {
      return {
        // what user has typed
        entry: "",

        // these are the target words the user will be aiming for
        words: randomWords(1000),

        // an array of the words the user has attemped, in the form
        // { target: String, entered: String }
        completedWords: [],
        timeRemaining: 60,
        gameRunning: false,
        

        // holds the countdown timer to be cleared at end of game
        timerInterval: null
      };
    },

    computed: {
      // time remaining as percentage, to be passed to ProgressBar
      progressPercentage() {
        return this.timeRemaining / 0.6;
      },

      // Shows the two most recently completed words, or blanks if not done enough yet
      completedWordsToShow() {
        const emptyWord = {
          target: "",
          entered: ""
        };
        if (this.completedWords.length == 0) {
          return [emptyWord, emptyWord];
        } else if (this.completedWords.length == 1) {
          return [this.completedWords[0], emptyWord];
        } else {
          return this.completedWords.slice(0, 2);
        }
      },

      score() {
        return this.completedWords.filter(word => word.target == word.entered)
          .length;
      }
    },

    methods: {
      toggleGame() {
        this.gameRunning ? this.endGame() : this.newGame();
      },

      newGame() {
        this.gameRunning = true;

        // generate a new set of random words
        this.words = randomWords(1000);

        this.completedWords = [];
        this.entry = "";

        // automatically focus the input box
        // nextTick must be used because the input is disabled while gameRunning = false.
        this.$nextTick(() => this.$refs.wordInput.focus());
        this.timeRemaining = 60;
        this.timerInterval = setInterval(() => this.timeRemaining--, 1000);
      },
      endGame() {
        this.gameRunning = false;
        clearInterval(this.timerInterval);
      },
      checkWord(e) {
        // stop space actually being entered int othe box
        e.preventDefault();

        // don't check word if no characters in the box (in case space accidentally double pressed)
        if (this.entry == "") {
          return;
        }

        const targetWord = this.words.pop();
        this.completedWords.unshift({
          target: targetWord,
          entered: this.entry
        });
        this.entry = "";
      }
    },
    watch: {
      timeRemaining(time) {
        if (time == 0) {
          this.endGame();
        }
      }
    }
  };
</script>