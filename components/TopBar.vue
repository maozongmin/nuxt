<template>
  <div class="bar">
    <!-- icon & title -->
    <img class="icon" src="~/assets/img/logo.png" />
    <!-- <div class="exit right">退出</div>
    <div class="user right">
      <img class="avatar" :src="avatar" />
      <div class="name">{{ username }}</div>
    </div>
    <div class="search right">
      <el-input
        v-model="searchText"
        prefix-icon="el-icon-search"
        size="small"
        type="text"
        placeholder="请输入关键词"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      avatar:
        'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchSlicePnga21f50bedf097160b39f0b10e96b143c',
      username: 'sakuramo'
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
//     position: fixed;
//     top:0;
//     left:0;
//     right:0;
//   z-index:99;
//   background:#fff;
  width: 100%;
  height: 60px;
  box-shadow: 0px -2px 14px 0px rgba(170, 170, 170, 0.5);
  cursor: default;

  .icon {
    width: 130px;
    margin: 10px 0 0 20px;
  }

  .title {
    font-size: 16px;
    font-style: italic;
    font-weight: 500;

    margin-left: 6px;
    vertical-align: 20px;
  }

  .right {
    float: right;
  }

  .exit {
    height: 60px;
    font-size: 14px;
    font-weight: 300;
    color: rgba(48, 48, 74, 1);
    line-height: 14px;

    padding: 23px 30px;
    border-left: 1px solid rgba(241, 241, 241, 1);
    cursor: pointer;
  }

  .user {
    height: 60px;
    width: 200px;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0px 4px 7px 0px rgba(194, 194, 194, 0.5);
      border: 2px solid rgba(255, 255, 255, 1);

      margin: 15px 19px;
    }

    .name {
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      color: rgba(48, 48, 74, 1);

      vertical-align: 21px;

      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .search {
    margin: 14px (48px-19px);
    .el-input /deep/ input {
      width: 300px;
      border-radius: 16px;
    }
  }
}
</style>
