package com.yc.tieba.entity;

public class QueryEntity {
	private String param;
	private int status;
	
	public QueryEntity(String param, int status) {
		this.param = param;
		this.status = status;
	}
	public String getParam() {
		return param;
	}
	public void setParam(String param) {
		this.param = param;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
}
