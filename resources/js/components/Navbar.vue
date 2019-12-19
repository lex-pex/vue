<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2" style="opacity: 0.7">
        <div class="container">
            <a href="#" class="navbar-brand">{{ page_title }}</a>
        </div>
    </nav>
</template>
<script>
    export default {

        data() {
            return {
                page_title : 'Articles SPA',
            };
        },
        created() {
//            this.page_title = 'Articles SPA';
//            this.fetchArticles();
        },
        methods : {},

    }
</script>
