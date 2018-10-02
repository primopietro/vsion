<template>
<div id="app">
    <h1>Vsion</h1>
    <transaction-edit v-if="edit" v-bind:transaction="edit" v-on:cancel="edit=null" v-on:submit="edit=null"></transaction-edit>
    
    <div id="insert-box" class="box">
        <transaction-insert></transaction-insert>
    </div>

    <div id="list-box" class="box">
      <h3>Transactions</h3>
        <transaction-list v-on:edit="editTransaction"></transaction-list>
    </div>
</div>
</template>

<script>

import * as DatabaseTransactions from './database/DatabaseTransactions';
import TransactionList from './components/transaction/list.vue';
import TransactionInsert from './components/transaction/insert.vue';
import TransactionEdit from './components/transaction/edit.vue';

export default {
    name: 'app',
    data() {
        return {
          edit: null
        }
    },
    methods: {
      editTransaction(transaction){
        this.edit = transaction;
      }
    }
}
</script>

<style>
body,
html {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    background: #ebeff1;
}

#insert-box,
#list-box,
h1 {
    width: 86%;
    padding: 3%;
    margin-left: auto;
    margin-right: auto;
}

.box{
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 20px;
    background: white;
}
#insert-box h3,
#insert-box input,
#insert-box button{
    width: 100%;
}

.box h3{
    margin-top: 0;
}

h1{
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
    margin: 0 auto;
    padding: 3%;
    width: 92%;
}
h3{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
}

#app {}

ul,
li {
    list-style-type: none;
    padding: 0;
}
</style>
