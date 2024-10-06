// Function to calculate distance from Scuber's headquarters (42nd Street) in blocks
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); // Calculate absolute difference in blocks
}

// Function to calculate distance from Scuber's headquarters in feet
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Call the blocks function
    return blocks * 264; // Convert blocks to feet
}

// Function to calculate the distance traveled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start); // Calculate absolute difference in blocks
    return blocksTravelled * 264; // Convert blocks to feet
}

// Function to calculate the fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination); // Get the distance in feet

    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; // Charge 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // Flat fare of $25 for distances over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // No rides allowed over 2500 feet
    }
}

// Example usage
console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50)); // Output: 2112
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056
console.log(calculatesFarePrice(34, 38)); // Output: 4.08
console.log(calculatesFarePrice(34, 44)); // Output: 25
console.log(calculatesFarePrice(34, 100)); // Output: 'cannot travel that far'
