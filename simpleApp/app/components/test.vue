<template>
  <Page>
  <ActionBar title="fsds" class="action-bar"/>
  <StackLayout>
  
  <Button @tap="$navigator.navigate('/home')"  text="Appointment" />


  </StackLayout>
  </Page>
</template>

<script>

  export default {

    data(){
    return{

      }
    },
   

  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
  
</style>
