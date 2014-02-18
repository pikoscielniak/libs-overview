var dns = require("dns");
var domain = "google.com";

dns.lookup(domain, 4, function(error, address, family) {
    if (error) {
        console.error("DNS lookup failed with code " + error.code);
    } else {
        console.log(domain + " -> " + address);
    }
});
dns.resolve(domain, "AAAA", function(error, addresses) {
    if (error) {
        console.error("DNS lookup failed with code " + error.code);
    } else {
        console.log(domain + " -> " + addresses);
    }
});

dns.lookup(domain, 4, function(error, address, family) {
    dns.reverse(address, function(error, domains) {
        console.log(domain + " -> " + address + " -> " + domains);
    });
});
