<template>
  <div class="nav d-flex flex-column">
    <NavSection title="Собеседники" :isOpen=false :itemsList="usersSlugs" id="collapse1" />
    <NavSection title="Каналы" :isOpen=false :itemsList="channelsSlugs" id="collapse2" />
    <NavSection title="Группы" :isOpen=true :itemsList="groupsSlugs" id="collapse3" />
  </div>
</template>

<script>
  import NavSection from './NavSection';
  import {usersSlugs} from '../../users-slugs';
  import {channelsSlugs} from '../../channels-slugs';
  import {groupsSlugs} from '../../groups-slugs';
  import store from "../../store/store";

  export default {
    computed: {

    },
    data() {
      return {
        usersSlugs,
        channelsSlugs,
        groupsSlugs
      }
    },
    components: {
      NavSection
    },
    methods: {

    }
  }

</script>

<style scoped>
  .nav {
    height: 100%;
    flex-wrap: nowrap!important;
  }
</style>