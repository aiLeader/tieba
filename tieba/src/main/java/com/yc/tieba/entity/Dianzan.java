package com.yc.tieba.entity;


public class Dianzan {
	private String  userid;
	private String nid;
	private Integer dstatus;
	public Dianzan() {
	}
	
	public Dianzan(String userid, String nid, Integer dstatus) {
		this.userid = userid;
		this.nid = nid;
		this.dstatus = dstatus;
	}
	
	public String getuserid() {
		return userid;
	}

	public void setuserid(String userid) {
		this.userid = userid;
	}

	public String getNid() {
		return nid;
	}

	public void setNid(String nid) {
		this.nid = nid;
	}

	public Integer getDstatus() {
		return dstatus;
	}

	public void setDstatus(Integer dstatus) {
		this.dstatus = dstatus;
	}

	@Override
	public String toString() {
		return "\nDianzan [userid=" + userid + ", nid=" + nid + ", dstatus=" + dstatus + "]";
	}
	
}
