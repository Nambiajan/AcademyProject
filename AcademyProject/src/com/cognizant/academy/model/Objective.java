package com.cognizant.academy.model;

public class Objective {
  
	private int id;
	private String level;
	private String description;
	private Stack stack;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Stack getStack() {
		return stack;
	}
	public void setStack(Stack stack) {
		this.stack = stack;
	}
}
