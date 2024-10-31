<template>


  <h1 :class="$style.title">title</h1>

</template>

<script>

import styles from './HelloWorld.module.css'

export default {
  name: 'HelloWorld',
  computed: {
    $style() {
      return styles;
    }
  }
}

</script>
