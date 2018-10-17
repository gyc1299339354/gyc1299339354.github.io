<template>
  <div class="company egoonet">
    
    <div class="backhome" @click="goSomewhere('/home')">返回</div>
    
    <h1>易谷</h1>
    
    <div class="company-split"></div>
    
    <ul>
      <li class="project">
        <h3 class="project-name">FreeSWITCH运维系统</h3>
        <div class="project-desc">
          FreeSWITCH常用运维操作整合相关业务的后端管理系统

          <div class="frame-view">
            <img src="http://oald2814c.bkt.clouddn.com/egoonet_2.png?1">
            <div class="tip">架构概览</div>
          </div>
        </div>
      </li>
      <li class="project">
        <h3 class="project-name">总分一体化信息调度系统</h3>
        <div class="project-desc">
          国家电网通讯系统。以视频会议、机房检修、值班排表、通知公告为主要业务功能。
          开发内容：
          <strong>会议聊天</strong>、
          <strong>文件传输</strong>、
          <strong>值班排表</strong>、
          <strong>通知公告</strong>
          
          <div class="frame-view">
            <img src="http://oald2814c.bkt.clouddn.com/egoonet_1.png">
            <div class="tip">架构概览</div>
          </div>
          
        </div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { EgoonetView } from './egoonet.view'
export default EgoonetView
</script>

<style lang="stylus" scoped>
@import './egoonet.stylus';
</style>
