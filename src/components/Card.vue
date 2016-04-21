<template>
  <div class="card">
    <div class="main-img" :style="{ backgroundImage: 'url(' + image + ')'}"></div>
    <div class="information">
      <p class="date">
        <span class="time">{{ time }}</span> {{ date }}
      </p>
      <p class="location">{{ location }}</p>
    </div>
    <div class="content">
      <h3 class="title" v-if="title">{{ title }}</h3>
      <div class="user">
        <img class="avatar" :src="avatar" alt="">
        <span class="username">{{ username }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
      coerce: (date) => {
        const month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const dateArray = date.split('.')
        return dateArray[2] + ',' + month[dateArray[1]] + ',' + dateArray[0]
      }
    },
    time: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  ready () {
  }
}
</script>

<style scoped>
.card {
  font-size: 1.8vw;
  margin: 30px 0;
  background: #fff;
  position: relative;
  width: 40vw;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: inline-block;
  text-align: left;
}
.main-img {
  width: 100%;
  height: 40vw;
  border-radius: 5px 5px 0 0;
  background-size: cover;
}
.information {
  color: #fff;
  background: linear-gradient(rgba(0,0,0,0.01),rgba(0,0,0,0.8));
  width: 36vw;
  height: 11vw;
  padding: 0 2vw;
  position: absolute;
  top: 29vw;
}
.information p {
  margin: 5px 0;
}
.time {
  font-weight: 600;
  font-size: 4vw;
  margin-right: 8px;
}
.content {
  padding: 2vw;
}
.title {
  margin: 1.5vw 0;
  color: #808080;
}
.user {
  height: 8vw;
}
.avatar {
  position: absolute;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
}
.username {
  display: inline-block;
  width: 25vw;
  font-weight: 400;
  height: 8vw;
  margin-left: 9vw;
  line-height: 8vw;
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis
}
@media screen and (min-width:768px) {
  .card {
    font-size: 1.5vw;
    width: 25vw;
  }
  .main-img {
    height: 25vw;
  }
  .information {
    width: 23vw;
    height: 8vw;
    padding: 0 1vw;
    top: 17vw;
  }
  .time {
    font-size: 3vw;
  }
  .user {
    height: 6vw;
  }
  .avatar {
    width: 6vw;
    height: 6vw;
  }
  .username {
    height: 6vw;
    left: 6vw;
    line-height: 6vw;
    margin-left: 7vw;
    width: 10vw;
  }
}
</style>
