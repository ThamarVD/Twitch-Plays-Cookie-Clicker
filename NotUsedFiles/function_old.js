function newChat(message){
    bigCookie.click();

    switch(message.toLowerCase()){
        case "shimmer click":
            //Click on all objects that would appear on screen
            for(let i of document.querySelectorAll('.shimmer')){
                i.click();
            }
            break;
        case "buy cursor":
            storeBulkMax.click();
            productName0.click();
            storeBulk1.click();
            break;
        case "buy grandma":
            storeBulkMax.click();
            productName1.click();
            storeBulk1.click();
            break;
        case "buy farm":
            storeBulkMax.click();
            productName2.click();
            storeBulk1.click();
            break;
        case "buy mine":
            storeBulkMax.click();
            productName3.click();
            storeBulk1.click();
            break;
        case "buy factory":
            storeBulkMax.click();
            productName4.click();
            storeBulk1.click();
            break;
        case "buy bank":
            storeBulkMax.click();
            productName5.click();
            storeBulk1.click();
            break;
        case "buy temple":
            storeBulkMax.click();
            productName6.click();
            storeBulk1.click();
            break;
        case "buy wizard tower":
            storeBulkMax.click();
            productName7.click();
            storeBulk1.click();
            break;
        case "buy shipment":
            storeBulkMax.click();
            productName8.click();
            storeBulk1.click();
            break;
        case "buy alchemy lab":
            storeBulkMax.click();
            productName9.click();
            storeBulk1.click();
            break;    
        case "buy portal":
            storeBulkMax.click();
            productName10.click();
            storeBulk1.click();
            break;
        case "buy time machine":
            storeBulkMax.click();
            productName11.click();
            storeBulk1.click();
            break;
        case "buy antimatter condenser":
            storeBulkMax.click();
            productName12.click();
            storeBulk1.click();
            break;
        case "buy prism":
            storeBulkMax.click();
            productName13.click();
            storeBulk1.click();
            break;
        case "buy chancemaker":
            storeBulkMax.click();
            productName14.click();
            storeBulk1.click();
            break;
        case "buy fractal engine":
            storeBulkMax.click();
            productName15.click();
            storeBulk1.click();
            break;
        case "buy javascript console":
            storeBulkMax.click();
            productName16.click();
            storeBulk1.click();
            break;
        case "buy idleverse":
            storeBulkMax.click();
            productName17.click();
            storeBulk1.click();
            break;
        case "buy upgrades":
            //Buy All Upgrades
            for(let i of document.querySelectorAll('.crate.upgrade.enabled')){
                i.click();
            }
            break;
    }
}