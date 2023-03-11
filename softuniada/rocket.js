function drawRocket(n) {
  
   
      const width = Number(n) + 5;
      const halfWidth = Math.floor(width / 2);
  
      // Draw the top half of the rocket
      for (let i = 0; i < halfWidth; i++) {
        const spaces = ' '.repeat(halfWidth - i - 1);
        const dots = '.'.repeat(i + 1);
        console.log(`${spaces}/${dots}\\${dots}\\${spaces}`);
      }
  
      // Draw the middle section of the rocket
      console.log(`+${'='.repeat(width - 2)}+`);
  
      // Draw the bottom half of the rocket
      for (let i = halfWidth - 1; i >= 0; i--) {
        const spaces = ' '.repeat(halfWidth - i - 1);
        const dots = '.'.repeat(i + 1);
        console.log(`${spaces}\\${dots}/${dots}/${spaces}`);
      }
 
  }
  
  // Example usage:
  drawRocket(10);
  