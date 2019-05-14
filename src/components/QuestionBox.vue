<template>
 <div>
  <b-jumbotron>

    <template slot="lead">
     <p v-html="currentQuestion.question"></p>
    </template>

    <hr class="my-4">

    <p>
     {{currentAnswers}}
    </p>

    <b-button  variant="primary" >Submit</b-button>
    <b-button @click="next" variant="success">Next</b-button>
  </b-jumbotron>
</div>
</template>

<script>
export default {
  props:{
    currentQuestion: Object,
    currentAnswers: Array,
    next: Function,
    shuffleAnswers: Function
  }
}
</script>
