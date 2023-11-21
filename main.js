const { createApp } = Vue;


createApp({
    data(){

        return{
           
            inputError:false,
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
                    done: false
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
        deleteTask(i){
            this.tasks.splice(i, 1)



        },
        //aggiungo una task
        addTask(){

            if(this.userInput.length<3){
                this.inputError = true;
            }else{

                this.tasks.unshift({
                    text: this.userInput,
                    done: false
                })
                
                this.userInput="",
                this.inputError=false
                
                
            }
            //task completa
        },
        taskDone(i){
            this.tasks[i].done = (!this.tasks[i].done)


        }


    },

    mounted(){

    }
}).mount("#app")