class Concert {
   private static MAX_TICKETS = 100
   
   constructor(public artist: string, public tickets: number = 50) {
	   if(tickets > Concert.MAX_TICKETS)
	     throw new Error("Too many tickets!")
   }  
   
   buyTickets(amount: number): void {
	   if(amount <= this.tickets)
	   	this.tickets -= amount
	   else throw new Error("Not enough tickets")
   }
   
}

class RockConcert extends Concert{
	
	constructor(name: string, tickets = 100, public volume = 11) {
		super(name, tickets)
	}
	
	buyTickets(amount: number) {
		if(amount % 2 === 0) 
			super.buyTickets(amount)
		else throw new Error("Only multiples of two allowed!")
	}
}

var concert = new Concert("Sting", 100)

var rockConcert = new RockConcert("ACDC", 10)
rockConcert.volume
