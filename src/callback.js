var callback=new Vue({
	el:'#callback',
	data:{},
	created:function(){
		//获取code
		var search = location.search
		var code;
		if (search) {
			code = search.split('=')[1]
		}
		console.log(code);
	}
})