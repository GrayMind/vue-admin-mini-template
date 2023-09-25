<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <!-- 欢迎提示 -->
      <welcome class="right-menu-item welcome-container" />

      <!-- 用户头像姓名及退出操作 -->
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-image
            class="user-avatar"
            :src="avatar"
            fit="cover"
          >
            <div
              slot="error"
              class="image-slot"
            >
              <i class="el-icon-picture-outline" />
            </div>
          </el-image>
          <span class="user-name">{{ nickName }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu
          slot="dropdown"
          class="user-dropdown"
        >
          <el-dropdown-item @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/common/components/Breadcrumb';
import Hamburger from '@/common/components/Hamburger';
import Welcome from '@/common/components/Welcome';

export default {
  name: "NavbarComponent",
  components: {
    Breadcrumb,
    Hamburger,
    Welcome,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'nickName',
    ]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
    async logout() {
      try {
        await this.$confirm('是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        });
        await this.$store.dispatch('user/logout');
        this.$router.push('/login');
        window._user_click_exit = true;
        window.location.reload();
      } catch (error) {
        console.log('取消退出登录');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .welcome-container {
      font-size: 14px;
    }
    .download-app-container {
      font-size: 14px;
    }
    .errLog-container {
      display: inline-block;
      vertical-align: top;
      line-height: 25px;
      margin-top: 8px;
    }
    .avatar-container {
      margin-right: 30px;
      margin-left: 30px;
      height: 50px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        height: 50px;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          ::v-deep .image-slot {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #F5F7FA;
          }
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }

        .user-name {
          line-height: 40px;
          display: inline-block;
          vertical-align: top;
          margin-left: 8px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
