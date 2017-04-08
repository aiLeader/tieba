package com.yc.tieba.util;

import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;

public class sendMobileCode {
	
	private Integer code;
	// 官网的URL
	private static String url = "http://gw.api.taobao.com/router/rest";
	// 成为开发者，创建应用后系统自动生成
	private static String appkey = "23737193";
	private static String secret = "c0e01fe7b03d1df088bb03405f3946a7";
	
	public sendMobileCode() {
	}
	
	public Integer getCode() {
		return code;
	}

	public void sendMobileCoder(String num) {
		String result = null;
		String product = "贴吧";
		code = RandomNumUtil.getRandomNumber();//生成六位不重复随机数
		//request.getSession().setAttribute("code",code.toString());
		TaobaoClient client = new DefaultTaobaoClient(url, appkey, secret);
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend("123456");
		req.setSmsType("normal");
		req.setSmsFreeSignName("贴吧");
		req.setSmsParamString("{\"code\":\"" + code + "\",\"product\":\"" + product + "\"}");
		req.setRecNum(num);
		req.setSmsFreeSignName("爱贴就上贴吧");
		req.setSmsTemplateCode("SMS_60245295");
		try {
			AlibabaAliqinFcSmsNumSendResponse rsp = client.execute(req);
			System.out.println("rsp.getBody()"+rsp.getBody());
			result = rsp.getSubMsg();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
