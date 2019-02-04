package com.cognizant.academy.model;

import java.util.*;

public class Stack {

	private int id;
	private String name;
	private List<Objective> objective= new ArrayList<Objective>();
    public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Objective> getObjective() {
		return objective;
	}
	public void setObjective(List<Objective> objective) {
		this.objective = objective;
	}
	
	
}
