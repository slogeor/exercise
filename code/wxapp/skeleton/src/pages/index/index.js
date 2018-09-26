//获取应用实例
const app = getApp()

Page({
	data: {
		show: false,
		motto: 'Hello World',
		userInfo: {
			avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKUdXxSZHXsricibg0AT5xytsZP2X6pNmibjDtxnZNR3zjuXKYd4zcHmsRghjRga85fFgoZ21iaAiazUsw/132',
			nickName: '|G. XIAO|'
		},
		lists: [
			'JavaScript',
			'CSS',
			'HTML',
		],
		showSkeleton: true
	},
	onLoad: function () {
		const that = this;
		setTimeout(() => {
			that.setData({
				show: true,
				showSkeleton: false
			})
		}, 3000)
	}
})
