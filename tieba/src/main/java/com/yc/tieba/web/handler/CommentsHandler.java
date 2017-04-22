package com.yc.tieba.web.handler;

import java.io.UnsupportedEncodingException;
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
@SessionAttributes({ServletUtil.LOGIN_USER,ServletUtil.COMM_SESSION})
public class CommentsHandler {
	@Autowired
	private CommentsService commentsService;
	
	@RequestMapping(value="list",method=RequestMethod.POST)
	@ResponseBody
	public PaginationBean<Comments> listAllComments(String page,String rows){
		return commentsService.listAllComm(page,rows);
	}
	@RequestMapping(value="banList",method=RequestMethod.POST)
	@ResponseBody
	public PaginationBean<Comments> listBanComments(String page,String rows){
		return commentsService.findBanComm(page,rows);
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
	public PaginationBean<Comments> findComByNid(@RequestParam("nid")String nid,@RequestParam("page")String page,@RequestParam("totalPage")String totalPage){
		return commentsService.findComByNid(nid,page,totalPage);
	}
	@RequestMapping(value="addComm")
	public String AddComment(Comments comments,HttpServletRequest req) throws UnsupportedEncodingException{
		comments.setCcontent(new String(comments.getCcontent().getBytes("iso-8859-1"),"utf-8"));
		if(comments.getUserid()==""||comments.getUserid()==null){
			return "redirect:../page/loginJugle.jsp";
		}else{
			req.getSession().setAttribute(ServletUtil.COMM_SESSION, commentsService.addNewComm(comments));
			return "redirect:../page/noteDetail.jsp?nid="+comments.getNid();
		}
	}
}
