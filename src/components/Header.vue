<template>
    <header>
        <div class="logo">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div class="login">
            <router-link :to="{name: 'Login'}">
                <button class="btn">S'identifier</button>
            </router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    header {
        width: 100vw;
        position: fixed;
        background-color: black;
        opacity: 0.75;
        box-shadow: 0 30px 15px 0 rgba(0,0,0,1);

        .logo {
            float: left;

            img {
                width: 5vw;
            }
        }

        .login {
            float: right;

            button {
                color: white;
                background-color: #e50914;
                margin-right: 50px;
                margin-top: 25px;
            }
        }
    }
</style>
