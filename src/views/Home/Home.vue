<template>
  <div class="home">
    
    <div class="first-area">
      <div class="name">
        <div>耿 雨晨</div>
        <div class="name-job">Web Developer</div>
      </div>

      <div class="job">
        <span>Node.js</span>
      </div>
    </div>
    
    <div class="split-spacer"></div>
    
    <div class="roadmap">
      <div class="roadmap-item">
        <div class="roadmap-desc">
          <div>2010.09</div>
          <div>入学 南京邮电大学 软件工程</div>
        </div>
        <div class="roadmap-item-point" id="njupt"></div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-item-point" id="graduation"></div>
        <div class="roadmap-desc">
          <div>2014.07</div>
          <div>本科 毕业</div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-item-point" id="egoonet"></div>
        <div class="roadmap-desc">
          <div>2014.04 ~ 2016.01</div>
          <div><span class="company-name" @click="goCompany('egoonet')">上海易谷网络科技有限公司</span></div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-desc">
          <div>2016.01 ~ 2016.06</div>
          <div><span class="company-name" @click="goCompany('dada')">上海卓赞信息科技有限公司</span></div>
        </div>
        <div class="roadmap-item-point" id="dada"></div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-desc">
          <div>2016.06</div>
          <div><span class="company-name" @click="goCompany('hanlan')">上海翰蓝网络科技有限公司</span></div>
        </div>
        <div class="roadmap-item-point" id="zhezhe"></div>
      </div>
    </div>

    <div class="roadmap-end">
      <div>至今</div>
    </div>

    <div class="technology">
      HTML / CSS / JavaScript 熟练工
    </div>
    
    <div class="technology">
      <span>Vue.js > </span>
       
      <span style="opacity: 0.3;">Angular > </span>
       
      <span style="opacity: 0.1;">React.js</span>
    </div>

    <div class="technology">
      [Express][Koa][Restify][Egg] / Mongodb / Redis
    </div>

    <div class="technology">
      ....
    </div>
    
    <div class="split-full-line"></div>

    <div class="hobby">
      <div>
        <img src="../../assets/img/hobby_switch.png">
        <img src="../../assets/img/hobby_basketball.png">
        <img src="../../assets/img/hobby_movie.png">
        <img src="../../assets/img/hobby_music.png">
        <img src="../../assets/img/hobby_travel.png">
      </div>
    </div>
    
    <div class="avatar">
      <img src="../../assets/img/my_avatar.png">
    </div>
    
    <div class="contact mail">
      <div>1299339354@qq.com</div>
    </div>

    <div class="contact tel">
      <div>18795958003</div>
    </div>
    
    <div class="ground-line">
      <img src="http://oald2814c.bkt.clouddn.com/groundLine.svg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { HomeView } from './home.view'
export default HomeView
</script>

<style lang="stylus" scoped>
@import './home.stylus';
</style>
