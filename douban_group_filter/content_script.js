
var items = $("tr.pl");

var msg = {}
msg.type = "douban_group_filter"

if(items.length == 0){
	msg.error = "no times";
}
else{
	var list = new Array("立水桥", "西二旗", "超低价美房～", "去外地低价租", "西直门", "军事",
		"天通苑", "五道口", "上地", "回龙观", "芍药居", "西红门", "海淀", "次卧",
		 "三元桥", "访谈", "健身","屌丝", "和平里", "8号线",
		 "亚运村",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		 "_",
		"望京", "西三旗");

	// msg.title = $("#cb_post_title_url").text();
	// msg.postDate = msg.find("#post-date").text();
	// msg.author = msg.find("a").first().text();
	// msg.url = document.URL;

	// msg.title = $("#cb_post_title_url").text();
	// msg.postDate = msg.find("#post-date").text();
	// msg.author = msg.find("a").first().text();
	msg.url = document.URL;
	msg.totalCount = items.length;

	msg.removeCount = 0
	console.log("ok")
	for (var item in list) 
	{
	console.log("ok111")
		var removeList = $(":contains("+"\'"+list[item]+"\'"+").pl")
		msg.removeCount += removeList.length
		console.log(msg.removeCount)
		removeList.hide()
	}

	// $(".title").bind({
	// 	click : function(event){
	// 		event.preventDefault()
	// 		console.log("click")
	// 	},
	// 	mouseenter : function(){
	// 		console.log("enter")
	// 	}
	// })
}

chrome.runtime.sendMessage(msg);