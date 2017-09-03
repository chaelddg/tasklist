<template id="home-template">
  <Row>
    <Col span="12" offset="6">
      <div class="content-container">
        <div class="content">
          <h1>Tasklists</h1>
          <br>       
          <Row>
            <Col span="18">
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
                <li><Checkbox size="large" v-model="single"><span class="task-text">Apply iVue for Front End</span></Checkbox></li>
                <li><Checkbox size="large" v-model="single"><span class="task-text">Do the routing Components</span></Checkbox></li>
                <li><Checkbox size="large" v-model="single"><span class="task-text">Configure Nginx</span></Checkbox></li>
                <li><Checkbox size="large" v-model="single"><span class="task-text">Wire up to the Back End</span></Checkbox></li>
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
        tasktitle: '',
        single: false,
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
  .task-text {
   padding-left: 10px;
  }
</style>
