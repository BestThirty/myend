<template>
    <div id="container">
            <header class="mui-bar mui-bar-nav">
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
                <h1 class="mui-title">DYX-CMS</h1>
            </header>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to='/home'>
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/member">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item" to="/shopcar">
                    <span class="mui-icon mui-icon-download"><span class="mui-badge">9</span></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="/search">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>
            <router-view></router-view>
    </div>  
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            } 
        }
    }
</script>

<style scoped>
   
</style>