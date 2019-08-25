<template>
  <nav>
    <v-app-bar
      app
      :shrink-on-scroll="$vuetify.breakpoint.mdAndUp"
      :prominent="$vuetify.breakpoint.mdAndUp"
      flat
      color="white"
    >
      <v-row
        no-gutters
        style="height: 100%; max-width: 1280px;"
        class="mx-auto"
      >
        <v-app-bar-nav-icon
          v-show="$vuetify.breakpoint.smAndDown"
          @click="navDrawer = true"
          class="my-auto"
        ></v-app-bar-nav-icon>
        <img
          height="100%"
          src="/images/headerlogo.png"
          class="pl-2"
          @click="$router.push(`/`)"
        />
        <v-spacer></v-spacer>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          to="/expo"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          Expo
        </v-btn>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          to="/conference"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          Conference
        </v-btn>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          to="/workshops"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          Workshops
        </v-btn>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          to="/specialevents"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          Special Events
        </v-btn>
        <v-btn
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          @click="$router.replace({ query: { attend: 1 } })"
        >
          <span class="mont">
            Attend
          </span>
        </v-btn>
      </v-row>
    </v-app-bar>

    <!-- NAV DRAWER -->
    <v-navigation-drawer
      app
      v-model="navDrawer"
      disable-resize-watcher
      mobile-break-point="3000"
    >
      <div class="px-4 headline pa-4">Navigation</div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item router to="/">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic">
              Home Page
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/expo">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic">
              Expo
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/conference">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic">
              Conference
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/workshops">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic">
              Workshops
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/specialevents">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic">
              Special Events
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navDrawer: false
    };
  }
};
</script>

<style>
</style>
