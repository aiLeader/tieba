package com.yc.tieba.entity;

import java.util.Date;

public class Store {
	private String userid;
	private String tid;
	private Date sttimes;
	private Integer status;
	public Store() {
		// TODO Auto-generated constructor stub
	}
	public Store(String userid, String tid, Date sttimes, Integer status) {
		this.userid = userid;
		this.tid = tid;
		this.sttimes = sttimes;
		this.status = status;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getTid() {
		return tid;
	}
	public void setTid(String tid) {
		this.tid = tid;
	}
	public Date getSttimes() {
		return sttimes;
	}
	public void setSttimes(Date sttimes) {
		this.sttimes = sttimes;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "\nStore [userid=" + userid + ", tid=" + tid + ", sttimes=" + sttimes + ", status=" + status + "]";
	}
	
}
