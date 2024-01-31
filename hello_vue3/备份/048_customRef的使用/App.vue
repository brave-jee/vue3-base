<template>
	<div class="app">
		<h1>{{ msg }}</h1>
		<input type="text" v-model="msg">
	</div>	
</template>

<script setup lang="ts" name="App">
	import {ref} from 'vue'
	import useMsgRef from './useMsgRef'
	
	// 使用vue提供的默认ref定义响应式数据，数据一变，页面就更新
	// let msg = ref('你好')
	// 使用useMsgRef来定义一个响应式数据且有延迟效果
	let {msg} = useMsgRef('你好',2000)
</script>

<style>
	.app {
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
	button {
	margin: 0 5px;	
	}
</style>