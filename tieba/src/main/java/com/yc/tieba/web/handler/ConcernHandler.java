package com.yc.tieba.web.handler;


import java.io.UnsupportedEncodingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.yc.tieba.entity.NoteInfo;
import com.yc.tieba.entity.Concern;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.ConcernService;

@Controller
@RequestMapping("concern")
public class ConcernHandler {
	@Autowired
	private ConcernService concernService;
	
	//查询
		@RequestMapping(value="attentionUs")
		@ResponseBody
		public Integer attentionUserb(String userida,String useridb){
			System.out.println("   userida:"+userida+" useridb"+useridb);
			if(userida.isEmpty()){
				return 9;
			}else if(useridb.isEmpty()||useridb==null){
				return 8;
			}
			return concernService.attentionUserb(userida,useridb);
		}
		
	@RequestMapping(value="showConcernByUserid")
	@ResponseBody
	public PaginationBean<Concern> showConcernById(String userida,String page){
		return concernService.showConcernById(userida,page,"5");
	}
}
