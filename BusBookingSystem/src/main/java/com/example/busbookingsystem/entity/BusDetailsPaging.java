package com.example.busbookingsystem.entity;

import java.util.List;

public class BusDetailsPaging {

	private List<BusDetails> bus;
	private long totalBus;
	
	public List<BusDetails> getBus() {
		return bus;
	}
	public void setBook(List<BusDetails> bus) {
		this.bus = bus;
	}
	
	public long getTotalBus() {
		return totalBus;
	}
	public void setTotalBus(long totalBus) {
		this.totalBus = totalBus;
	} 

}
