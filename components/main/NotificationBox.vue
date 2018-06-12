<template>
<div>
  <div v-if="$store.state.notif.notifs.length > 0" class="notif-box container">
    <notification v-for="notif in $store.state.notif.notifs" :key="notif.key" v-bind:type="notif.type" v-bind:content="notif.content"></notification>
  </div>
</div>
</template>

<script>
import Notification from "~/components/main/Notification"

export default {
  components: {
    Notification
  },
}
</script>

<style>
.notif-box {
  margin-top:30px;
}
</style>