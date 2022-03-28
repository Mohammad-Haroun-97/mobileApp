<template>
  <Page>
     <StackLayout>

    <ActionBar class="actionBar" title="ssss">
  <StackLayout orientation="horizontal" class="actionBar">
    <Image src="~/assets/logo.png" width="160%" height="80" verticalAlignment="center"  class="actionBar"/>
  </StackLayout>
</ActionBar>
<StackLayout class="body">



<Label text="Account Name" class="labelTitle"/>
 <TextField v-model="AccountName" class="inputs" />
 <Label text="Password" class="labelTitle"/>
 <TextField v-model="Password" class="inputs" />
 <Button  @tap="$navigator.navigate('/test')" text="Sign In" class="btn55"/>
 <Label text="Forget your password ?"  class="forget" />
 <!-- <GridLayout columns="*, 2*" rows="2*, 3*"  class="signUpTitle" > -->
 <!-- <Button @tap="$navigator.navigate('/test')" text="Sign UP"  rowSpan="1" col="0" class="btn344"/> -->
 <!-- <HtmlView html="<h5 >Join Agents on Cloud Community and sign up now</h5>" rowSpan="1" col="1" class="HtmlView" /> -->
 <!-- </GridLayout> -->
 </StackLayout>
 </StackLayout>
 </Page>
</template>
<script>
  export default {
    data(){
    return{
        selectedDate:'',
        AccountName:'',
        Password:''
      }
    },
    computed: {
     message() {
        return "Harouuun";
        }},
     methods:{
     onButtonTap(){
     console.log('helllllllllllllllllo',this.selectedDate);
      },
   
      }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';
      .fas {
      }
    .logoTitle{
    
    font-family: 'Palette Mosaic', cursive;
    }
    // Custom styles
    .forget{
      color:white;
      font-family: 'Courier New', Courier, monospace;
      text-align:center;
      display:block;
      margin: auto;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
    .grid{
      width:100%
    }
    .body{
      padding-top:150px;
      background-color:#393E46;
      height:100%
    }

    .Notifications{
      text-align: center;
      font-size:25px;
      color:white;
      margin-top: 100px;
      font-family: cursive;
     
    }
    .actionBar{
      background-color:#222831
    }
    .labelTitle{
      margin-top: 10%;
        color: #F05454;
        margin-left: 20%;
        font-weight:700
    }
    .inputs{
      display: block;
      width: 60%;
      margin:auto;
      color: white;
      
    }
  
    .btn55{
      width:40%;
      height:10%;
      background-color: #8de21d;
      margin-top: 100px;
    }
    .btn344{
      background-color: #150E56;
      color: white;
    }
    .signUpTitle{
      margin-top: 12%;
    }
    .HtmlView{
      
       color:white;
      font-family: 'Courier New', Courier, monospace;
      text-align: center;
      display:block;
      margin:auto;
      font-size: 11px;
      
    }

</style>
