const { createApp } = Vue;


createApp({
    data(){

        return{
            tasks: [
                {
                    text: "task 1 test",
                    done: true
                },
                {
                    text: "task 1 test",
                    done: true
                },
                {
                    text: "task 1 test",
                    done: true
                },
                {
                    text: "task 1 test",
                    done: true
                }

            ]
        }
    },

    methods:{
        //cancello la task
        //aggiungo una task
        //task completa


    },

    mounted(){

    }
}).mount("#app")