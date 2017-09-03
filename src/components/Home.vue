<template id="home-template">
  <Row>
    <Col span="6">
      <Menu :theme="theme" active-name="1">
        <MenuGroup title="Filters">
          <MenuItem name="1">
            <Icon type="ios-folder-outline"></Icon>
            All Tasks
          </MenuItem>
          <MenuItem name="2">
             <Icon type="ios-checkmark-outline"></Icon>
            Done
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-list-outline"></Icon>
            Remaining Tasks
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Actions">
          <MenuItem name="4">
            <Icon type="checkmark-round"></Icon>
            Save
          </MenuItem>
          <MenuItem name="5">
            <Icon type="close-round"></Icon>
            Cancel
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Col>
    <Col span="18">
      <div class="content-container">
        <div class="content">
          <h1>Tasklists</h1>
          <br>       
          <Row>
            <Col span="12">
              <Input class="task-title-input" v-model="tasktitle" @on-enter="addTask" :autofocus="true" placeholder="Task Item"></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost" @click="addTask">Add Task</Button>
            </Col>
          </Row>
          <br>
          <Row>
            <Col span="24">
              <ul class="task-list">
                <li v-for="(task, index) in tasklist" :key="index">
                  <Checkbox size="large" v-model="task.checked">
                    <span :class="{ 'task-checked': task.checked }"  class="task-text">{{ task.text }}</span>
                  </Checkbox>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  </Row>
</template>

<script>
  import { mapGetters } from 'vuex';

  import store from '../vuex/store';

  export default {
    store,
    computed: mapGetters({
      tasklist: 'getTasklist',
    }),
    data() {
      return {
        theme: 'light',
        tasktitle: '',
      };
    },
    methods: {
      addTask() {
        const text = this.tasktitle.trim();

        if (text) {
          this.tasktitle = '';
          this.$store.dispatch('addTask', { text, checked: false });
        }
      },
    },
  };
</script>

<style scoped>
  .content-container {
    margin: 15px;
  }
  .content {
    padding: 10px;
  }
  .task-list li {
    margin-bottom: 10px;
  }
  .task-checked {
    text-decoration: line-through;
  }
  .task-text {
   padding-left: 10px;
  }
</style>
