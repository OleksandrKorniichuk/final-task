function AppViewModel() {	
    this.enterNumberLeft = ko.observable();
    this.enterNumberRight = ko.observable();
    this.calculateAll = ko.observable(function(){

    })
    /*Левый блок*/
    this.NumberOfPatientsWithDVT = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[A]";
        } else {
            return (100-(this.enterNumberLeft()*7.5/100));
            }            
    }, this);

    this.InjectionsAvoidedCalculationleft = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[B+C]";
        } else {
        	return ((182*(0.122*this.NumberOfPatientsWithDVT())) + (2*8*((this.NumberOfPatientsWithDVT()) - (0.122*this.NumberOfPatientsWithDVT()))));        	
            }            
    }, this);

     this.InrClinicVisitsAvodedLeft = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[E]";
        } else {
        	return (((this.NumberOfPatientsWithDVT()) - (this.NumberOfPatientsWithDVT()*0.122)) * (9+5));        	
            }            
    }, this);

     this.NurseVisitsAvoidedLeft = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[G]";
        } else {
        	return (0.064*(2*8*((this.NumberOfPatientsWithDVT()) - (0.122*this.NumberOfPatientsWithDVT())))).toFixed(2);        	
            }            
    }, this);

      this.HospitalBedDaysSavesLeft = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[H]";
        } else {
        	return (3 * ((this.NumberOfPatientsWithDVT()) * (52 / 100))).toFixed(2);        	
            }            
    }, this);

     /*Правий блок*/

     this.NumberOfPatientsWithDVTRight = ko.computed(function() {
    	if (!this.enterNumberRight()) {
            return "[A]";
        } else {
            return (100-(this.enterNumberRight()*15/100));
            }            
    }, this);

     this.InjectionsAvoidedCalculationRight = ko.computed(function() {
    	if (!this.enterNumberRight()) {
            return "[B+C]";
        } else {
        	return ((182*(0.176*this.NumberOfPatientsWithDVTRight())) + (2*8*((this.NumberOfPatientsWithDVTRight()) - (0.176*this.NumberOfPatientsWithDVTRight())))).toFixed(2);        	
            }            
    }, this);

     this.InrClinicVisitsAvodedRight = ko.computed(function() {
    	if (!this.enterNumberRight()) {
            return "[I]";
        } else {
        	return (((this.NumberOfPatientsWithDVTRight()) - (this.NumberOfPatientsWithDVTRight()*0.176)) * (9+5)).toFixed(2);        	
            }            
    }, this);

     this.HospitalBedDaysSavesRight = ko.computed(function() {
    	if (!this.enterNumberRight()) {
            return "[H]";
        } else {
        	return (0.896 * ((this.NumberOfPatientsWithDVTRight()) * 1)).toFixed(2);        	
            }            
    }, this);


    /*Блок снизу*/


    this.InjectionsAvoidedDVTPE = ko.computed(function() {   
    		if (!this.enterNumberLeft()) {
            return "[DVT+PE]";
        } else {
        	return this.NurseVisitsAvoidedLeft();        	
            }            
    }, this);

     this.InrClinicVisitsAvodedDVTPE = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[DVT+PE]";
        } else {
        	return ((parseFloat(this.InrClinicVisitsAvodedLeft())) + (parseFloat(this.InrClinicVisitsAvodedRight()))).toFixed(2);         	
            }            
    }, this);

    this.NurseVisitsAvoidedDVT = ko.computed(function() {   
    		if (!this.enterNumberLeft()) {
            return "[DVT]";
        } else {
        	return (parseFloat(this.InjectionsAvoidedCalculationleft())) + (parseFloat(this.InjectionsAvoidedCalculationRight()));        	
            }            
    }, this);

    this.HospitalBedDaysSavesDVTPE = ko.computed(function() {
    	if (!this.enterNumberLeft()) {
            return "[DVT+PE]";
        } else {
        	return ((parseFloat(this.HospitalBedDaysSavesLeft())) + (parseFloat(this.HospitalBedDaysSavesRight()))).toFixed(2);         	
            }            
    }, this);



    
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());