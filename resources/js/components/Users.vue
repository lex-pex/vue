<template>

    <div class="content container">

        <div class="row justify-content-center">
            <div class="col-6">
                <div class="lex-list">
                    <ul>
                        <li v-for="user in users">{{ user.name + ': ' + user.email }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="title m-b-md"> VueJS : Users </div>

        <div class="flex-center position-ref">
            <div class="links">
                <a href="https://laravel.com/docs">Docs</a>
                <a href="https://laracasts.com">Laracasts</a>
                <a href="https://laravel-news.com">News</a>
                <a href="https://blog.laravel.com">Blog</a>
                <a href="https://nova.laravel.com">Nova</a>
                <a href="https://forge.laravel.com">Forge</a>
                <a href="https://vapor.laravel.com">Vapor</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
        </div>

    </div>

</template>

<script>
    import axios from 'axios';
    import route from '../route';

    export default {

        data() {
           return {
               users : []
           };
        },

        computed : {
            cUsers : function() {
                return this.users;
            }
        },

        methods : {
            getUsers() {
                axios.get(route('users.index'))
                .then((response) => {
                    this.users = response.data.users
                });
                console.log(this.users);
            }
        },

        mounted() {
            this.getUsers()
            // console.log('Component mounted.')
        }
    }
</script>











