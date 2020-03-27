<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <h2>Articles Component</h2>

                <form @submit.prevent="addArticle()">
                    <div class="form-group">
                        <input v-model="article.title" type="text" class="form-control" placeholder=" T i t l e">
                    </div>
                    <div class="form-group">
                        <textarea v-model="article.body" class="form-control" placeholder=" B o d y "></textarea>
                    </div>
                    <div class="form-group text-right">
                        <button type="submit" class="btn btn-sm btn-outline-dark">Save</button>
                    </div>
                </form>

                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li v-bind:class="[{disabled : !pagination.prev_page_url}]" class="page-item"><a class="page-link"
                            @click="fetchArticles(pagination.prev_page_url)" href="#">Prev</a></li>
                        <li class="page-item disabled">
                            <a class="page-link text-dark" href="#">{{ pagination.current_page }} / {{ pagination.last_page }}</a>
                        </li>
                        <li v-bind:class="[{disabled : !pagination.next_page_url}]" class="page-item"><a class="page-link"
                            @click="fetchArticles(pagination.next_page_url)" href="#">Next</a></li>
                    </ul>
                </nav>

                <div class="card card-body mb-2" v-for="article in articles" v-bind:key="article.id">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.body }}</p>
                    <hr />
                    <div class="row">
                        <div class="col-12 text-right">
                            <button @click="editArticle(article)" class="btn btn-sm btn-outline-success">Edit</button>
                            <button @click="deleteArticle(article.id)" class="btn btn-sm btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li v-bind:class="[{disabled : !pagination.prev_page_url}]" class="page-item"><a class="page-link"
                            @click="fetchArticles(pagination.prev_page_url)" href="#">Prev</a></li>
                        <li class="page-item disabled">
                            <a class="page-link text-dark" href="#">{{ pagination.current_page }} / {{ pagination.last_page }}</a>
                        </li>
                        <li v-bind:class="[{disabled : !pagination.next_page_url}]" class="page-item"><a class="page-link"
                            @click="fetchArticles(pagination.next_page_url)" href="#">Next</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data() {

        return {

            articles : [],

            article : {
                id : '',
                title : '',
                body : ''
            },

            article_id : '',
            pagination : {},
            edit : false

        };

    },

    created() {
        this.fetchArticles();
    },

    methods : {

        fetchArticles(page_url) {
            page_url = page_url || 'api/articles';
            let vm = this;
            fetch(page_url)
                .then(response => response.json())
                .then(response => {
                    this.articles = response.data;
                    vm.makePagination(response.meta, response.links)
                })
                .catch(err => console.log(err));
            /*
            axios.get(page_url)
                .then(response => {
                    this.articles = response.data.data;
                    vm.makePagination(response.data.meta, response.data.links);
                })
                .catch(err => console.log(err));
            */
        },

        makePagination(meta, links) {
            this.pagination = {
                current_page : meta.current_page,
                last_page : meta.last_page,
                next_page_url : links.next,
                prev_page_url : links.prev

            };
        },

        deleteArticle(id) {

            if(confirm('Are you sure?')) {
                fetch(
                    `api/article/${id}`, // `api/article/{id}`, the same
                    { method : 'delete' }
                    )
                    .then(response => response.json())
                    .then(data => {
                        alert('Article removed');
                        this.fetchArticles();
                    })
                    .catch(err => console.log(err));
            }

        },

        addArticle() {
            if(this.edit === false) {
                // Add
                /* axios test */
                axios.post('api/article', {title : this.article.title, body : this.article.body})
                    .then((response) => {
                        this.article.title = '';
                        this.article.body = '';
                        alert('Article Added');
                        this.fetchArticles();
                    }).catch(err => console.log(err));
                /*
                // The fetch() method seems useless and JSON.stringify works funny...
                fetch('api/article',
                    {
                        method: 'post',
                        // body: JSON.stringify(this.article),
                        // body: '{"title" : "' + this.article.title + '", "body" : "' + this.article.body + '"}',
                        headers : { 'content-type' : 'application-json' }
                    })
                .then(response => response.json())
                .then(data => {
                    this.article.title = '';
                    this.article.body = '';
                    alert('Article Added');
                    this.fetchArticles();
                })
                .catch(err => console.log(err));
                */

            } else {
                // Update
                /* axios test */
                axios.put('api/article', {article_id : this.article.id, title : this.article.title, body : this.article.body})
                    .then((response) => {
                        this.article.title = '';
                        this.article.body = '';
                        alert('Article Updated');
                        this.fetchArticles();
                    }).catch(err => console.log(err));
                /*
                fetch('api/article',
                    {
                        method: 'put',
                         body: JSON.stringify(this.article),
                        // body: '{"title" : "' + this.article.title + '", "body" : "' + this.article.body + '"}',
                        headers : { 'content-type' : 'application-json' }
                    })
                .then(response => response.json())
                .then(data => {
                    this.article.title = '';
                    this.article.body = '';
                    alert('Article Updated');
                    this.fetchArticles();
                })
                .catch(err => console.log(err));
                */
            }
        },

        editArticle(article) {
            this.edit = true;
            this.article.id = article.id;
            this.article.article_id = article.id;
            this.article.title = article.title;
            this.article.body = article.body;
        }

    }
}
</script>

