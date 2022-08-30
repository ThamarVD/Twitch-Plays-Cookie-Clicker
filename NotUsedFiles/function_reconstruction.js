//Program not to be used
var message;
const buildings = [ "cursor", "grandma", "farm", 
                    "mine", "factory", "bank", 
                    "temple", "wizard tower", "shipment", 
                    "alchemy lab", "portal", "time machine", 
                    "antimatter condenser", "prism", "chancemaker", 
                    "fractal engine", "javascript console", "idleverse" ]

if(message.toLowerCase().startsWith("buy")){
    var subBuy = message.toLowerCase().substring(4);
    
    if(subBuy.startsWith("1")){
        subBuy = subBuy.substring(2);
        
        //Buy 1 of a building
        if(buildings.includes(subBuy)){
            storeBulk1.click();
            document.getElementById("productName" + buildings.indexOf(subBuy)).click();
            storeBulk1.click();
        }

        //Buy 1 Upgrade
        else if(subBuy == "upgrade"){
            document.querySelectorAll('.crate.upgrade.enabled')[0].click();
        }
    }
    
    if(subBuy.startsWith("10")){
        subBuy = subBuy.substring(3);

        //Buy 10 of a building (Doesn't Use Plural -- NEED TO FIX)
        if(buildings.includes(subBuy)){
            storeBulk10.click();
            document.getElementById("productName" + buildings.indexOf(subBuy)).click();
            storeBulk1.click();
        }
    }
    
    if(subBuy.startsWith("all")){
        subBuy = subBuy.substring(4);

        //Buy ALL available buildings (Doesn't Use Plural -- NEED TO FIX)
        if(buildings.includes(subBuy)){
            storeBulkMax.click();
            document.getElementById("productName" + buildings.indexOf(subBuy)).click();
            storeBulk1.click();
        }

        //Buy All Upgrades
        else if(subBuy == "upgrades"){
            for(let i of document.querySelectorAll('.crate.upgrade.enabled')){
                i.click();
            }
        }
    }
}
else if(message.toLowerCase().startsWith("upgrade")){
    var subBuy = message.toLowerCase().substring(8);

    //Upgrade a Building with Sugar Lumps
    if(buildings.includes(subBuy)){
        document.getElementById("productLevel" + buildings.indexOf(subBuy)).click();
        promptOption0.click();
    }
}
else{
    switch(message.toLowerCase()){
        case "scroll up center":
            centerArea.scrollBy({top: -500, behavior: 'smooth'});
            break;
        case "scroll down center":
            centerArea.scrollBy({top: 500, behavior: 'smooth'});
            break;
        case "scroll up store":
            sectionRight.scrollBy({top: -500, behavior: 'smooth'});
            break;
        case "scroll down store":
            sectionRight.scrollBy({top: 500, behavior: 'smooth'});
            break;
        case "shimmer click":
        case "golden click":
            for(let i of document.querySelectorAll('.shimmer')){
                i.click();
            }
    }
}