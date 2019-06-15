import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import { createProvider } from "./vue-apollo";
const apollo = createProvider().defaultClient;
// here apollo is equal to this.$apollo in Vue component

import {
  EVENTS_QUERY,
  LOGIN_USER_QUERY,
  CREATE_USER_MUTATION,
  BOOK_EVENT_MUTATION,
  BOOKINGS_QUERY
} from "@/gql/graphql";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: null,
    userId: null,
    events: [],
    bookings: []
  },
  getters: {
    events: state => state.events,
    bookings: state => state.bookings,
    userId: state => state.userId
  },
  mutations: {
    setAuthData(state, userData) {
      state.access_token = userData.token;
      state.userId = userData.userId;
    },
    setEvents(state, events) {
      state.events = events;
    },
    setBookings(state, bookings) {
      state.bookings = bookings.filter(booking => {
        return booking.user._id === state.userId
      });
    }
  },
  actions: {
    authUser({ commit }, userData) {
      commit("setAuthData", userData);
    },
    getAllEvents({ commit }) {
      apollo
        .query({
          query: EVENTS_QUERY
        })
        .then(response => {
          console.log(response.data);
          commit("setEvents", response.data.events);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllBookings({ commit }) {
      apollo
        .query({
          query: BOOKINGS_QUERY
        })
        .then(response => {
          console.log(response.data);
          commit("setBookings", response.data.bookings);
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout({ dispatch }) {
      window.localStorage.clear();
      router.push({ path: "/auth" });
      dispatch("authUser", {});
    },
    submitLogin({ dispatch }, credentials) {
      apollo
        .query({
          query: LOGIN_USER_QUERY,
          variables: {
            email: credentials.email,
            password: credentials.password
          }
        })
        .then(response => {
          console.log(response.data.login);
          dispatch("authUser", response.data.login);

          // add local storage as another method
          window.localStorage.setItem(
            "access_token",
            response.data.login.token
          );
          window.localStorage.setItem("userId", response.data.login.userId);
          router.push({ path: "events" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitRegister({}, credentials) {
      console.log(credentials);
      apollo
        .mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            userInput: credentials
          }
        })
        .then(response => {
          console.log(response.data.login);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
