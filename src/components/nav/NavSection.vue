<template>
    <section class="list-group">
        <b-list-group-item variant="warning" v-b-toggle="id" class="text-center nav-items-header">
            {{ title }}
        </b-list-group-item>

        <b-collapse :visible="isOpen" :id="id" class="nav-items">
            <div v-for="(item, index) in itemsList" v-on:click="connectTo(item.slug)">
                <router-link
                        :to="item.slug"
                        :key="index + item.slug"
                        class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                >
                    {{ item.name }}
                </router-link>
            </div>
        </b-collapse>
    </section>
</template>

<script>
    import io from '../../socket';

    export default {
        props: {
            id: String,
            title: String,
            itemsList: Array,
            isOpen: Boolean
        },
        watch: {},
        methods: {
            connectTo(slug) {
                io.emit('connectTo', {
                    userId: 123321,
                    chatId: slug,
                    channel: true
                });
            }
        }
    }
</script>

<style scoped>
    .list-group {
        max-height: calc(100% - 100px);
    }

    .nav-items {
        height: 100%;
        overflow-x: hidden;
    }

    .nav-items-header {
        cursor: pointer;
    }
</style>