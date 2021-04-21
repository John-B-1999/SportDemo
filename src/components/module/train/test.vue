<template>
  <div>
    <button @click="getStatus">{{ buttonText }}</button>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				timer: null, //首先我在data函数里面进行定义定时器名称：
				buttonText : '轮询获取订单支付状态',
				timerNum: 60 // 设置定时器时间
			}
		},
		methods: {
			getStatus() {
				this.loading(); // 启动定时器
				this.timer = setInterval(() => {  //创建定时器
					if (this.timerNum === 0) { // 设置的定时器时间为0后执行的操作
						this.timer && this.clearTimer(); // 关闭定时器
						window.open('码灵导航 - 程序员网址导航', '_blank'); // 在新窗口打开程序员网址导航
					} else {
						this.loading();
					}
				}, 1000);
			},
			loading() { // 启动定时器
				this.timerNum -= 1; // 定时器减1
				this.text = '获取中(' + this.timerNum + ')';
        console.log(this.text);
			},
			clearTimer() {//清除定时器
				clearInterval(this.timer);
				this.timer = null;
			}
		},
		// 最后在beforeDestroy()生命周期内清除定时器：
		beforeDestroy() {
		    clearInterval(this.timer);
		    this.timer = null;
		}
	}
</script>
