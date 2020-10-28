<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions({
      getSessionID: "getSessionID",
      getUserAccount: "getUserAccount"
    }),
  },
  async created(){
    let session_id = await this.getSessionID(this.$route.query.request_token)
    let user_info = await this.getUserAccount(session_id)
    
    this.$router.push({name: 'Latest'})
  }
};
</script>