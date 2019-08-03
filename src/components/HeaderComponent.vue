<template>
  <nav>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.smAndDown"
        @click="navDrawer = true"
      ></v-app-bar-nav-icon>
      <img height="115px" src="/images/header-logo.png" class="pl-2" />
      <v-spacer></v-spacer>
      <v-btn
        text
        rounded
        small
        class="px-4 mx-1"
        color="primary"
        v-show="$vuetify.breakpoint.mdAndUp"
      >
        Expo
      </v-btn>
      <v-btn
        text
        rounded
        small
        class="px-4 mx-1"
        color="primary"
        v-show="$vuetify.breakpoint.mdAndUp"
      >
        Conference
      </v-btn>
      <v-btn
        text
        rounded
        small
        class="px-4 mx-1"
        color="primary"
        v-show="$vuetify.breakpoint.mdAndUp"
      >
        Workshops
      </v-btn>
      <v-btn
        text
        rounded
        small
        class="px-4 mx-1"
        color="primary"
        v-show="$vuetify.breakpoint.mdAndUp"
      >
        Special Events
      </v-btn>
      <v-btn rounded small class="px-4 mx-1" color="primary">
        Attend
      </v-btn>
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
            <v-list-item-title class="font-weight-bold font-italic"
              >Home Page</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic"
              >Expo</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic"
              >Conference</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic"
              >Workshops</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold font-italic"
              >Special Events</v-list-item-title
            >
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
