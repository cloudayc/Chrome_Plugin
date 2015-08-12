 
$(document).ready(function(){

		var data = chrome.extension.getBackgroundPage().data;

		$("#message").hide();
		$("#content-title").text(data.totalCount);
		$("#content-author").text(data.removeCount);
		$("#content-date").text("data.postDate");
		$("#content-first-access").text("data.firstAccess");
});
 