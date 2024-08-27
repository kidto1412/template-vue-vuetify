<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
      >
        <v-list density="compact">
          <v-list-subheader>REPORTS</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            @click="router.push(item.link)"
          >
            <!-- <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template> -->

            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script lang="ts" setup>
import router from "@/router/index";

const drawer = ref<boolean>(true);
const group = ref<any>(null);

const items = ref([
  {
    title: "Foo",
    value: "foo",
    link: "/about",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);

watch(group, () => {
  drawer.value = false;
});
</script>
