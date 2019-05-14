<template>
  <div id="app">
   <Header />
   <b-container>
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox 
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :currentAnswers="answers[index]"
            :next="next"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox
  },
  data(){
    return {
      questions: [],
      answers: [],
      index: 0
    }
  },
  methods: {
    next() {
      this.index++
    },
    shuffleAnswers(){
      for (let question of this.questions){
        let answers = [question.correct_answer,...question.incorrect_answers];
        for (let i = answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        this.answers.push(answers);
      }
    }
  }, 
  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
    .then(response => response.json())
    .then(jsonData => {
      this.questions = jsonData.results;
    })
    .then(()=>{
      this.shuffleAnswers()
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
