class Concert {
  private static MAX_TICKETS = 500	
	
  constructor(public artist: string, public tickets: number) {
	if(tickets > Concert.MAX_TICKETS) {
		throw new Error("Too many tickets!")
	}
  }
  
  buyTickets(amount: number) {
	  if(amount <= this.tickets) {
		  this.tickets -= amount
	  } else {
		  throw new Error("Not enough tickets!")
	  }
	  
  }
     
}

class RockConcert extends Concert {
	
	constructor(name: string, tickets: number, public volume: number = 11) {
		super(name, tickets)
	}
	
	buyTickets(amount: number) {
		if(amount % 2 === 1) {
			throw new Error("Should come in pairs")
		}
		super.buyTickets(amount)
	}
}

var concert = new Concert("Sting", 50)

var rockConcert: Concert = new RockConcert("ACDC", 100)
rockConcert.buyTickets(3)
