package com.yc.tieba.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.yc.tieba.entity.Comments;
import com.yc.tieba.entity.PaginationBean;
import com.yc.tieba.service.CommentsService;
import com.yc.tieba.util.ServletUtil;

@Controller("commentsHandler")
@RequestMapping("/comments")
@SessionAttributes(ServletUtil.LOGIN_USER)
public class CommentsHandler {
	@Autowired
	private CommentsService commentsService;
	
	@RequestMapping(value="list",method=RequestMethod.POST)
	@ResponseBody
	public List<Comments> listAllComments(){
		return commentsService.listAllComm();
	}
	@RequestMapping(value="banList",method=RequestMethod.POST)
	@ResponseBody
	public List<Comments> listBanComments(){
		return commentsService.findBanComm();
	}
	
	@RequestMapping(value="qnoteid",method=RequestMethod.POST)
	@ResponseBody
	public List<Comments> FindCommentByNid(@RequestParam("param")String param,@RequestParam("status")String status){
		return commentsService.findCommByNid(param,status);
	}
	
	@RequestMapping(value="quserid",method=RequestMethod.POST)
	@ResponseBody
	public List<Comments> FindCommentByUid(@RequestParam("param")String param,@RequestParam("status")String status){
		return commentsService.findCommByUid(param,status);
	}

	@RequestMapping("CombyId")
	@ResponseBody
	public Comments findComById(@RequestParam("cid")String cid){
		return commentsService.findCommById(cid);
	}
	@RequestMapping("banCom")
	@ResponseBody
	public boolean BanComById(@RequestParam("cid")String cid){
		return commentsService.banCommn(cid);
	}
	@RequestMapping("letCom")
	@ResponseBody
	public boolean letComById(@RequestParam("cid")String cid){
		return commentsService.letComm(cid);
	}
	@RequestMapping(value="findComByNid",method=RequestMethod.POST)
	@ResponseBody
	public PaginationBean<Comments> findComByNid(@RequestParam("nid")String nid,@RequestParam("page")String page){
		return commentsService.findComByNid(nid,page);
	}
}
