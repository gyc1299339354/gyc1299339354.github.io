<template>
  <div class="company hanlan">
    <div class="backhome" @click="goSomewhere('/home')">返回</div>
    
    <h1>翰蓝</h1>

    <div class="company-split"></div>

    <ul>
      <li class="project">
        <h3 class="project-name">遮遮后台管理系统</h3>
      </li>
      <li class="project">
        <h3 class="project-name">喵见后台管理系统</h3>
        <div class="project-desc">
          <div class="frame-view">
            <img src="../../assets/img/project_zhezhe.png">
            <div class="tip">架构概览</div>
          </div>
        </div>
      </li>
      <li class="project">
        <h3 class="project-name">小学问后台管理系统</h3>
        <div class="project-desc">
          <div class="frame-view">
            <img src="../../assets/img/project_xiaoxuewen.png">
            <div class="tip">架构概览</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { HanlanView } from './hanlan.view'
export default HanlanView
</script>

<style lang="stylus" scoped>
@import './hanlan.stylus';
</style>
