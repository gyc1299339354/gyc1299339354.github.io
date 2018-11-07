<template>
  <div class="company dada">
    <div class="backhome" @click="goSomewhere('/home')">返回</div>
    
    <h1>哒哒英语</h1>

     <div class="company-split"></div>
    
    <ul>
      <li class="project">
        <h3 class="project-name">Kurento 研究运用</h3>
        <div class="project-desc">
          用WebRTC取代先前的基于flash的视频架构，但WebRTC是点对点的模式，因此引入Kurento来实现Server端对流的控制。

          <div class="frame-view">
            <img src="../../assets/img/project_dada.png">
            <div class="tip">架构概览</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { DadaView } from './dada.view'
export default DadaView
</script>

<style lang="stylus" scoped>
@import './dada.stylus';
</style>
