# skeleton 绘制小程序骨架屏，轻量、方便、快捷

### 引入骨架屏组件

```javascript
// 引入骨架屏组件
{
  "usingComponents": {
    "skeleton": "/component/skeleton/skeleton"
  }
}

// index.js 初始化默认的数据，用于撑开页面结构，让骨架屏可以获取到整体的页面结构
Page({
	data: {
		showSkeleton: true
	},
	onLoad: function () {
		const that = this;
		setTimeout(() => {
			that.setData({
				showSkeleton: false
			})
		}, 3000)
	}
})
```

```html
<!--引入骨架屏模版 -->
<skeleton selector="skeleton" loading="spin"  bgcolor="#FFF" wx:if="{{showSkeleton}}"></skeleton>
<!--index.wxml-->
<view class="container skeleton">
  <view class="userinfo">
    <block>
      <image class="userinfo-avatar skeleton-radius" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname skeleton-rect">{{userInfo.nickName}}</text>
    </block>
  </view>
	...
</view>
```

## 说明

- 渲染节点的标识前缀，比如 ```selector="skeleton"``` 页面根节点。```class="skeleton-rect"``` 绘制矩形，```class="skeleton-radius"``` 圆形。
- 以最小节点原则添加相应的class，不要给view添加class，不然绘制区域会大很多
