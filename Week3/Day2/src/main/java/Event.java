import java.time.LocalDate;

public class Event {
	// class variable
	static int count; // instead of private static int count;
	
	//fields - instance variables
	private String name;
	private String location;
	private LocalDate date = LocalDate.now(); // la fecha de hoy preestablecida // private final LocalDate date = LocalDate.now(); no puede ser asignada
	
	// constructors (con distinta cantidad de datos)
	public Event(String name) {
		this.name = name;
		Event.count++;
	}
	
	public Event(String name, String location) {
		super();
		this.name = name;
		this.location = location;
		Event.count++;
	}
	
	public Event(String name, LocalDate date) {
		super();
		this.name = name;
		this.date = date;
		Event.count++;
	}
	
	public Event(String name, String location, LocalDate date) {
		this.name = name;
		this.location = location;
		this.date = date;
		Event.count++;
	}
	
	// getter & setters methods
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Event other = (Event) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	// toString() method
	@Override
	public String toString() {
		// @ formatter: off
		return new StringBuilder("Event [") 
			.append("name=").append (this.name).append(", ")
			.append("location=").append (this.location).append(", ")
			.append("date=").append (this.date)
			.append("]")
			.toString();
			// @ formatter: on
		//return "Event [name=" + name + ", location=" + location + "]";
	}
	
	
	
}
