package com.yc.tieba.entity;

public class UsersAddressRatio {
	private String address;
	private double ratio;
	public UsersAddressRatio() {
		// TODO Auto-generated constructor stub
	}
	
	public UsersAddressRatio(String address, double ratio) {
		this.address = address;
		this.ratio = ratio;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getRatio() {
		return ratio;
	}
	public void setRatio(double ratio) {
		this.ratio = ratio;
	}

	@Override
	public String toString() {
		return "\nUsersAddressRatio [address=" + address + ", ratio=" + ratio + "]";
	}
	
}
