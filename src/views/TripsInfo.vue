<template>
    <h1>TO DO LIST</h1>
    <input type="text" v-model.lazy="Tasks" placeholder="Enter your Task"/>
    <button @click="add">ADD</button>
    <ul>
        <TaskDo v-for="(Task, index) in arrTask" :key="index" 
        :data='Task' :i ='index' :arr='arrTask'
        @deleteTask ='deleteTask'
        @editeTask ='editeTask'
        @updateTask ='updateTask'
        @doneTask ='doneTask'></TaskDo>
    </ul>
</template>
<script setup>
    import {ref, reactive} from "vue";
    import TaskDo from "../components/TaskDo.vue";
    let Tasks = ref("");
    const arrTask = ref([]);
    const add = ()=>{
        if(Tasks.value !== ''){
            arrTask.value.push(Tasks.value);
            Tasks.value = '';
        }
    }
    const deleteTask = (i)=>{
        console.log(i);
    }
    const editeTask = (i)=>{
        Tasks.value =arrTask.value[i];
    }
    const updateTask = (i)=>{
        arrTask.value[i] = Tasks.value;
        Tasks.value = '';
    }
    const doneTask = (i) =>{
        console.log(i)
    }
</script>