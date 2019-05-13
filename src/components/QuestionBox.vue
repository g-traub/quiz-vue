<template>
 <div>
  <b-jumbotron>

    <template slot="lead">
     <p v-html="currentQuestion.question"></p>
    </template>

    <hr class="my-4">

    <p>
     Answers
    </p>

    <b-button variant="primary" href="#">Submit</b-button>
    <b-button @click="next" variant="success" href="#">Next</b-button>
  </b-jumbotron>
</div>
</template>

<script>
export default {
  props:{
    currentQuestion: Object,
    next: Function
  }
}
</script>
