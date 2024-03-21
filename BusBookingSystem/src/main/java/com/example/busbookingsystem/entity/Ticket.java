package com.example.busbookingsystem.entity;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(name = "Ticket_Info", sequenceName = "seq3", initialValue = 300)
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Ticket_Info")
	private int ticketId;
	 
	private String passName;
	
	private int passCount;

	private int busNumber;

	private double ticketPrice;
	
	private String source;
	
	private String destination;

	public Ticket() {
		super();
	}

	public Ticket(int ticketId, String passName, int passCount, int busNumber, double ticketPrice, String source,
			String destination) {
		super();
		this.ticketId = ticketId;
		this.passName = passName;
		this.passCount = passCount;
		this.busNumber = busNumber;
		this.ticketPrice = ticketPrice;
		this.source = source;
		this.destination = destination;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public String getPassName() {
		return passName;
	}

	public void setPassName(String passName) {
		this.passName = passName;
	}

	public int getPassCount() {
		return passCount;
	}

	public void setPassCount(int passCount) {
		this.passCount = passCount;
	}

	public int getBusNumber() {
		return busNumber;
	}

	public void setBusNumber(int busNumber) {
		this.busNumber = busNumber;
	}

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	@Override
	public String toString() {
		return "Ticket [ticketId=" + ticketId + ", passName=" + passName + ", passCount=" + passCount + ", busNumber="
				+ busNumber + ", ticketPrice=" + ticketPrice + ", source=" + source + ", destination=" + destination
				+ "]";
	}

	

	

}
