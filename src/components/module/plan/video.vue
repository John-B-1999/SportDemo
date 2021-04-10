<template>
 <div class="player">
   <video-player class="video-player vjs-custom-skin"
                 ref="videoPlayer"
                 :playsinline="true"
                 style="object-fit:fill"
                 :options="playerOptions"
                 :x5-video-player-fullscreen="true"
                 @pause="onPlayerPause($event)"
                 @play="onPlayerPlay($event)"
                 @fullscreenchange="onFullscreenChange($event)"
                 @click="fullScreen"
   >
   </video-player>
   <div>&nbsp;</div>
   <div style="display: table-cell;
   　　                  text-align: center;
   　　                  vertical-align: middle;">
               <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                 <span class="font-family" style="font-size: 30px; float: left;">{{title}}</span>
               </el-col>
               <div>&nbsp;</div>
               <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                 <span class="font-family" style="font-size: 15px; float: left;">{{mainText}}</span>
               </el-col>
            </div>
    <div>&nbsp;</div>
    <div style="float: left;">
      <el-tag>跑步后进行</el-tag>
      <el-tag>无需器械</el-tag>
    </div>
 </div>
</template>

<script>
  import test from '@/assets/logo.png'
  import {videoPlayer} from 'vue-video-player';

  export default {
    components: {
      videoPlayer
    },
    created() {
      this.title = this.$route.query.title;
      this.mainText = this.$route.query.mainText;
    },
    data() {
      return {
        title:"",
        mainText:"",
        pictureImg: test,
        playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "https://video.pearvideo.com/mp4/short/20200209/cont-1650197-14888002-hd.mp4"
          }],
          // poster: "你的封面地址",
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            // timeDivider: true,
            // durationDisplay: true,
            // remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    },
    methods: {
      fullScreen() {
        const player = this.$refs.videoPlayer.player
        player.requestFullscreen()//调用全屏api方法
        player.isFullscreen(true)
        player.play()
      },
      onPlayerPlay(player) {
        player.play()
      },
      onPlayerPause(player) {
        // alert("pause");
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    }
  }

</script>

<style>
   .video-js .vjs-big-play-button {
  	  width: 72px;
  	  height: 72px;
  	  border-radius: 100%;
  	  z-index: 100;
  	  background-color: #ffffff;
  	  border: solid 1px #979797;
  	}
</style>
