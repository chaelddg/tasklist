<template>
  <div id="app">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        Home
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-gear"></Icon>
        Settings
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      theme1: 'light',
    };
  },
};
</script>

<style>
</style>
