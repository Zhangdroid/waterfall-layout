<template>
  <loader v-if="$loadingAsyncData || loading"></loader>
  <ul v-if="!$loadingAsyncData" id="waterfall">
    <li v-for="item in list" transition="item">
      <card
        :image="item.image"
        :date="item.date"
        :time="item.time"
        :location="item.location"
        :title="item.title"
        :avatar="item.avatar"
        :username="item.username">
      </card>
    </li>
  </ul>
</template>
<script>
import Card from './Card'
import Loader from './Loader'

import getPostData from '../services/getPostData'
export default {
  ready () {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        this.loading = true
        this.addItems()
      }
    })
  },
  data () {
    return {
      list: [],
      loading: false
    }
  },
  components: {
    Card,
    Loader
  },
  methods: {
    addItems () {
      let self = this
      getPostData('static/data.json').then((list) => {
        self.loading = false
        self.list.push.apply(self.list, list)
      })
    }
  },
  asyncData () {
    return getPostData('static/data.json').then((list) => {
      return {
        list: list
      }
    })
  }
}
</script>
<style>
  ul {
    padding: 0;
    list-style: none;
    position:relative;
    margin:0px auto;
    column-count:2;
    column-gap: 30px;
    text-align: center;
  }
  .item-transition {
    transition: opacity .5s ease;
  }
  .item-enter {
    opacity: 0;
  }
  .item-leave {
    opacity: 0;
    position: absolute;
  }
  .item-move {
    transition: transform .5s cubic-bezier(.55,0,.1,1);
  }
  @media screen and (min-device-width:768px) {
    ul {
      width: 60vw;
    }
  }
</style>
