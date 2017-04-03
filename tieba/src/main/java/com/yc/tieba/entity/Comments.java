package com.yc.tieba.entity;

public class Comments {
	private String cid;
	private String nid;
	private String userid;
	private String pcid;
	private String ccontent;
	private String ctime;
	private Integer cgood;
	private Integer cstatus;
	private Integer cstates;
	private String cremark;
	
	
	public String getCid() {
		return cid;
	}


	public void setCid(String cid) {
		this.cid = cid;
	}


	public String getNid() {
		return nid;
	}


	public void setNid(String nid) {
		this.nid = nid;
	}


	public String getUserid() {
		return userid;
	}


	public void setUserid(String userid) {
		this.userid = userid;
	}


	public String getPcid() {
		return pcid;
	}


	public void setPcid(String pcid) {
		this.pcid = pcid;
	}


	

	public String getCcontent() {
		return ccontent;
	}


	public void setCcontent(String ccontent) {
		this.ccontent = ccontent;
	}


	public String getCtime() {
		return ctime;
	}


	public void setCtime(String ctime) {
		this.ctime = ctime;
	}


	public Integer getCgood() {
		return cgood;
	}


	public void setCgood(Integer cgood) {
		this.cgood = cgood;
	}


	public Integer getCstatus() {
		return cstatus;
	}


	public void setCstatus(Integer cstatus) {
		this.cstatus = cstatus;
	}


	public Integer getCstates() {
		return cstates;
	}


	public void setCstates(Integer cstates) {
		this.cstates = cstates;
	}


	public String getCremark() {
		return cremark;
	}


	public void setCremark(String cremark) {
		this.cremark = cremark;
	}


	@Override
	public String toString() {
		return "Comments [cid=" + cid + ", nid=" + nid + ", userid=" + userid + ", pcid=" + pcid + ", ccontent="
				+ ccontent + ", ctime=" + ctime + ", cgood=" + cgood + ", cstatus=" + cstatus + ", cstates=" + cstates
				+ ", cremark=" + cremark + "]\n";
	}


}
