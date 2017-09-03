<template id="home-template">
  <Row>
    
    <Col span="6">
      <Menu :theme="theme" active-name="1">
        <MenuGroup title="Filters">
          <MenuItem name="1">
            <Icon type="clipboard"></Icon>
            All Tasks
          </MenuItem>
          <MenuItem name="2">
            <Icon type="checkmark-circled"></Icon>
            Done
          </MenuItem>
          <MenuItem name="3">
            <Icon type="document-text"></Icon>
            Remaining Tasks
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
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
              <Input class="task-title-input" v-model="tasktitle" placeholder="Task Item"></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost">Add Task</Button>
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
  export default {
    data() {
      return {
        theme: 'light',
        tasktitle: '',
        tasklist: [
          { text: 'Apply iVue for front end', checked: false },
          { text: 'Do the routing components', checked: true },
          { text: 'Configure Nginx', checked: false },
          { text: 'Wire up to the back end', checked: true },
        ],
      };
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
