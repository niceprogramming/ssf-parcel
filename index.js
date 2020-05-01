elli.script.subscribe("loan", "open", onLoanOpen);

async function onLoanOpen(args) {
    
    let loan = await elli.script.getObject("loan");    
    let auth = await elli.script.getObject("auth");

    let user = await auth.getUser();
    let payment = await loan.getField("5");

    console.log(user);
    console.log('Initial payment: ' + payment);
    
}