// old interface
function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        return "$49.75";
    }
} 
// new interface 
function AdvancedShipping() {
    this.login = function(credentials) { /* ... */ };
    this.setStart = function(start) { /* ... */ };
    this.setDestination = function(destination) { /* ... */ };
    this.calculate = function(weight) { return "$39.50"; };
} 
// adapter interface 
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
 
    shipping.login(credentials);
 
    return {
        request: function(zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
} 
// log helper 
const log = (() => {
    let log = ""; 
    return {
        add: msg => { log += msg + "\n"; },
        show: () => { alert(log); log = ""; }
    }
})();
function run() {
    const shipping = new Shipping();
    const credentials = {token: "30a8-6ee1"};
    const adapter = new ShippingAdapter(credentials); 
    // original shipping object and interface 
    let cost = shipping.request("78701", "10010", "2 lbs");
    log.add("Old cost: " + cost);
     // new shipping object with adapted interface 
    cost = adapter.request("78701", "10010", "2 lbs"); 
    log.add("New cost: " + cost);
    log.show();
}
//##################################################################
// old interface
class Shipping {
    request(zipStart, zipEnd, weight) {
        return "$49.75";
    }
} 
// new interface 
class AdvancedShipping{
    login(credentials) { /* ... */ };
    setStart(start) { /* ... */ };
    setDestination(destination) { /* ... */ };
    calculate(weight) { return "$39.50"; };
} 
// adapter interface 
class ShippingAdapter{
    constructor(credentials){
        this.credentials = credentials;
        this.shipping = new AdvancedShipping();
        this.shipping.login(credentials);
    }  
    
    request(zipStart, zipEnd, weight) {
        shipping.setStart(zipStart);
        shipping.setDestination(zipEnd);
        return shipping.calculate(weight);
    }
} 
// log helper 
class Log {
    constructor(){
        this.log = '';
    }
    add(msg){ log += `${msg}\n`; }
    show(){ alert(log); log = ''; }
}
function run() {
    const log = new Log();
    const shipping = new Shipping();
    const credentials = {token: "30a8-6ee1"};
    const adapter = new ShippingAdapter(credentials); 
    // original shipping object and interface 
    let cost = shipping.request("78701", "10010", "2 lbs");
    log.add("Old cost: " + cost);
     // new shipping object with adapted interface 
    cost = adapter.request("78701", "10010", "2 lbs"); 
    log.add("New cost: " + cost);
    log.show();
}