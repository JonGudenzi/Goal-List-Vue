const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Learn vue',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');