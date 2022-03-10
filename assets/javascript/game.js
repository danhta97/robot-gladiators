/*  */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log (enemyName, enemyAttack, enemyHealth);
// This creates a function
var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators " + playerName + "!");
    
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that to update the 'enemyHealth' variable 
    enemyHealth = enemyHealth - playerAttack;
    //Subtract the value of 'enemyAttack' from value of 'playerHealth' and use thhat result to update the value of 'playerHealth' variable. 
    playerHealth = playerHealth - enemyAttack;
    
    //Log resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check Enemy Health
    if (enemyHealth <= 0) {
        window.alert (enemyName + " has died!")
    } else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
    }

    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check Player Health
     if (playerHealth <= 0) {
         window.alert (playerName + " has died...");
     } else {
         window.alert(playerName + " still has " + playerHealth + " health left.");
     }
}

// This execute the function
fight();

// Check to see if playerHealth variable is greather than 0.
if (playerHealth > 0) {
    console.log("your player is still alive!")
} else {
    console.log("your player has died...")
}
