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
          :class="isArabic ? `pr-2` : `px-2`"
          @click="isArabic ? $router.push(`/ar`) : $router.push(`/`)"
          style="cursor: pointer;"
        />
        <v-spacer></v-spacer>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          :to="isArabic ? `/expo/ar` : `/expo/en`"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
            {{ isArabic ? `المعرض` : `Expo` }}
          </span>
        </v-btn>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          :to="isArabic ? `/conference/ar` : `/conference/en`"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
            {{ isArabic ? `المؤتمر` : `Conference` }}
          </span>
        </v-btn>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          :to="isArabic ? `/workshops/ar` : `/workshops/en`"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
            {{ isArabic ? `ورش العمل` : `Workshops` }}
          </span>
        </v-btn>
        <v-btn
          text
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          router
          :to="isArabic ? `/specialevents/ar` : `/specialevents/en`"
          v-show="$vuetify.breakpoint.mdAndUp"
        >
          <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
            {{ isArabic ? `أحداث خاصة` : `Special Events` }}
          </span>
        </v-btn>
        <v-btn
          rounded
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          href="http://www.cvent.com/d/ryqdbb"
          target="_blank"
        >
          <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
            {{ isArabic ? `حضور المنتدى` : `Attend` }}
          </span>
        </v-btn>
        <v-btn
          text
          fab
          small
          class="px-4 mx-1 my-auto"
          color="primary"
          @click="switchLanguage()"
        >
          <span class="font-weight-bold">
            {{ $route.params.lang == "ar" ? `E` : `ع` }}
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
      :right="isArabic"
    >
      <div class="px-4 headline pa-4">
        {{ isArabic ? `الصفحات` : `Navigation` }}
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item router :to="isArabic ? `/ar` : `/en`">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold mont">
              {{ isArabic ? `الصفحة الرئيسية` : `Home Page` }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="isArabic ? `/expo/ar` : `/expo/en`">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold mont">
              {{ isArabic ? `المعرض` : `Expo` }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          router
          :to="isArabic ? `/conference/ar` : `/conference/en`"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold mont">
              {{ isArabic ? `المؤتمر` : `Conference` }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="isArabic ? `/workshops/ar` : `/workshops/en`">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold mont">
              {{ isArabic ? `ورش العمل` : `Workshops` }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          router
          :to="isArabic ? `/specialevents/ar` : `/specialevents/en`"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold mont">
              {{ isArabic ? `أحداث خاصة` : `Special Events` }}
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
  },
  methods: {
    switchLanguage() {
      if (this.$route.params.lang == "ar") {
        this.$router.push({ params: { lang: `en` } });
      } else if (this.$route.params.lang == "en") {
        this.$router.push({ params: { lang: `ar` } });
      } else {
        if (this.$route.path.slice(-1) == "/") {
          this.$router.push(`${this.$route.path}ar`);
        } else {
          this.$router.push(`${this.$route.path}/ar`);
        }
      }
    }
  },
  computed: {
    isArabic() {
      if (this.$route.params.lang == "ar") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>
