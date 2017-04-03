package com.yc.tieba.entity;

public class Types {
	private String tid;
	private String tname;
	private Integer tnum;
	private String tdesc;
	private Integer tstate;
	public Types() {
		// TODO Auto-generated constructor stub
	}
	
	public Types(String tid, String tname, Integer tnum, String tdesc, Integer tstate) {
		this.tid = tid;
		this.tname = tname;
		this.tnum = tnum;
		this.tdesc = tdesc;
		this.tstate = tstate;
	}

	public String getTid() {
		return tid;
	}

	public void setTid(String tid) {
		this.tid = tid;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public Integer getTnum() {
		return tnum;
	}

	public void setTnum(Integer tnum) {
		this.tnum = tnum;
	}

	public String getTdesc() {
		return tdesc;
	}

	public void setTdesc(String tdesc) {
		this.tdesc = tdesc;
	}

	public Integer getTstate() {
		return tstate;
	}

	public void setTstate(Integer tstate) {
		this.tstate = tstate;
	}

	@Override
	public String toString() {
		return "\nTypes [tid=" + tid + ", tname=" + tname + ", tnum=" + tnum + ", tdesc=" + tdesc + ", tstate=" + tstate
				+ "]";
	}
	
}
