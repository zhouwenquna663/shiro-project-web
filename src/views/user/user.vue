<template>
  <div>
    <div id="addDiv">
        <el-button @click="add()">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="Id" width="180"></el-table-column>
      <el-table-column prop="username" label="账号" width="180"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="data">
          <el-button @click="update(data.row)">修改</el-button>
          <el-button @click="deleteUser(data.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="Id" prop="Name">
          <span>{{editForm.id}}</span>
        </el-form-item>
        <el-form-item label="username" prop="Name">
          <el-input v-model="editForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="Name">
          <el-input v-model="editForm.password" auto-complete="off" @keyup.enter.native="submit()"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dataClear()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      editForm: {},
      title: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    update(data) {
      this.editForm.id = data.id;
      this.dialogVisible = true;
      console.log(data);
    },
    dataClear() {
      this.editForm = {};
      this.dialogVisible = false;
    },
    submit() {
      let obj;
      if (this.title == "新增") {
        obj = Axios.post("/user/save", this.editForm);
      } else {
        obj = Axios.post("/user/update", this.editForm);
      }
      obj.then(res => {
        console.log(res.data);
        if (res.data.message === "success") {
          this.dataClear();
          this.$message.success(res.data.message);
          this.getData();
        } else {
          this.$message.error(res.data.message);
          this.getData();
        }
      });
    },
    getData() {
      Axios.get("/user/list").then(res => {
        this.tableData = res.data.data;
      });
    },
    add() {
      this.title = "新增";
      this.dialogVisible = true;
    },
    deleteUser(id) {
      console.log(id);
      Axios.delete("/user/delete?id=" + id).then(res => {
        console.log(res.data);
        if (res.data.message === "success") {
          this.$message.success(res.data.message);
          this.getData();
        }
      });
    }
  }
};
</script>
<style scoped>
#addDiv{
    margin: 10px 20px 1px;
    float: left;
}
</style>