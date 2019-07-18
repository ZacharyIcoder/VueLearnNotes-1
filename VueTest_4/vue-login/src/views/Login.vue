<template>
 <div class="page">
    <form action='' v-if="!isLogin">
        用户名：
        <input type="text" v-model="username">
        密码：
        <input type="password" v-model="password">
        <br>
        <button type="button" @click="login()" >登录</button>
        <button type="button" @click="register()" >注册</button>
    </form>
    <form action='' v-else>
        用户名：
        <input type="text" v-model="username">
        输入密码：
        <input type="password" v-model="password">
        再次输入密码：
        <input type="password" v-model="repeat">
         <br>
        <button type="button" @click="addUser()" >确定</button>
        <button type="button" @click="cancel()" >取消</button>
    </form>
 </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isLogin:false,
                username:'',
                password:'',
                repeat:''
            }
        },
        methods: {
            login(){
                if(localStorage.getItem('username')===this.username&&localStorage.getItem('password')===this.password){
                    this.username='';
                    this.password=''
                    this.$router.push('/home/list')
                    return;
                }
                    alert("用户名或密码错误")
                
            },
            register(){
                this.isLogin=true;
            },
            addUser () { 
                if(!this.username || !this.password){
                    alert("用户名或密码为空")
                    return;
                }
                if(this.password!=this.repeat){
                    alert("两次密码不一致")
                    return;
                }
                localStorage.setItem("username",this.username)
                localStorage.setItem("password",this.password)
                this.username='';
                this.password=''
                this.isLogin=false;
            },cancel () {
                this.isLogin=false;
            }
        },
        components: {

        }
    }
</script>

<style scoped lang="stylus">
</style>
