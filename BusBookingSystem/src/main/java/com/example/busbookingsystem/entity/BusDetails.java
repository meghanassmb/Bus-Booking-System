package com.example.busbookingsystem.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotEmpty;

@Entity
@DynamicUpdate
public class BusDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int busNumber;

	private LocalDate arrivalDate;

	private LocalTime arrivalTime;

	private int totalSeats;

	private int availableSeats;

	@NotEmpty(message = "please enter source")
	private String source;

	@NotEmpty(message = "please enter destination")
	private String destination;

	//@NotBlank(message = "price cannot blank")
	private double ticketPrice;
	
	@ManyToOne
	@JoinColumn(name = "adminId")
	private Admin admin;

	@ManyToOne
	@JoinColumn(name = "passId")
	private Passenger passenger;

	
	public BusDetails() {
		super();
	}

	public BusDetails(int busNumber, LocalDate arrivalDate, LocalTime arrivalTime, int totalSeats, int availableSeats,
			@NotEmpty(message = "please enter source") String source,
			@NotEmpty(message = "please enter destination") String destination, double ticketPrice, Admin admin) {
		super();
		this.busNumber = busNumber;
		this.arrivalDate = arrivalDate;
		this.arrivalTime = arrivalTime;
		this.totalSeats = totalSeats;
		this.availableSeats = availableSeats;
		this.source = source;
		this.destination = destination;
		this.ticketPrice = ticketPrice;
		this.admin = admin;
	}

	public int getBusNumber() {
		return busNumber;
	}

	public void setBusNumber(int busNumber) {
		this.busNumber = busNumber;
	}

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public LocalTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public int getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(int totalSeats) {
		this.totalSeats = totalSeats;
	}

	public int getAvailableSeats() {
		return availableSeats;
	}

	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
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

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	@Override
	public String toString() {
		return "BusDetails [busNumber=" + busNumber + ", arrivalDate=" + arrivalDate + ", arrivalTime=" + arrivalTime
				+ ", totalSeats=" + totalSeats + ", availableSeats=" + availableSeats + ", source=" + source
				+ ", destination=" + destination + ", ticketPrice=" + ticketPrice + ", admin=" + admin + "]";
	}
	

	
}