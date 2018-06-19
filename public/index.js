/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Let's get started with Vue.js!",
      reviews: [
                { 
                  reviewer: "James McAvery",
                  rating: 5,
                  text: "Vue.js is soooooo coooool"
                },{ 
                  reviewer: "Einstien",
                  rating: 4,
                  text: "Vue.js is not a bad alternative to vanilla js."
                },{ 
                  reviewer: "Delbert McClinton",
                  rating: 2,
                  text: "Vue.js sucks"
                }
                ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});