//Fill in the array with the 14 lines of the song (for iteration 2)
$(document).ready(function(){

    // 14 lines
    const lines = [
        "When I set my eyes on you",
        "Gonna keep you outta town at night",
        "When I set my eyes on you",
        "Not gonna be outta my sight",
        "And now you know",
        "Everywhere on Earth you go",
        "You’re gonna have me as your man",
        "When I get my hands on you",
        "Gonna make you carry me",
        "When I get my hands on you",
        "Gonna make you marry me",
        "And now you know",
        "Everywhere on Earth you go",
        "You’re gonna have me as your man"
    ];
    let leftIndex = 0;
    let rightIndex = 1;

    //when the left line gets clicked, then the line will change to every even next line (ex. 0,2,4...) (for iteration 2)
    //LeftIndex should still equal 0 after the first click
    $('.line.left').click(function(){
        if($(this).text() == 'Click me!'){
            leftIndex = 0;
            $(this).text(lines[leftIndex]);
        }
        else{
            leftIndex = (leftIndex + 2) % lines.length;
            $(this).text(lines[leftIndex]);
        }
       
    });

     //when the right line gets clicked, then the line will change to every odd next line (ex. 1,3,5...) (for iteration 2)
    $('.line.right').click(function(){
        $(this).text(lines[rightIndex]);
        rightIndex = (rightIndex + 2)
        if (rightIndex >= lines.length) {
            rightIndex = 1;
        }
    });



});

//when the image gets clicked, then the line will change to the next line (for iteration 4)
$(document).ready(function(){
     // 14 lines
     console.log("Script loaded and jQuery is ready!");
     const lines = [
        "When I set my eyes on you",
        "Gonna keep you outta town at night",
        "When I set my eyes on you",
        "Not gonna be outta my sight",
        "And now you know",
        "Everywhere on Earth you go",
        "You’re gonna have me as your man",
        "When I get my hands on you",
        "Gonna make you carry me",
        "When I get my hands on you",
        "Gonna make you marry me",
        "And now you know",
        "Everywhere on Earth you go",
        "You’re gonna have me as your man"
    ];
    let currentLineIndex = 0;

    $('.drawing').click(function(){
        currentLineIndex = (currentLineIndex + 1) % lines.length;
        $('.line').text(lines[currentLineIndex]);
    });
});

// Make the bubbles float around the screen (for iteration 6)
$(document).ready(function() {
    // Select all individual bubble divs
    const bubbleElements = $('.bubbles > div');
    
    bubbleElements.each(function() {
        let bubble = $(this);
        
        // Randomize speed: between -1.5 and 1.5 pixels per frame
        let velocityX = (Math.random() - 0.5) * 3;
        let velocityY = (Math.random() - 0.5) * 3;

        // Get starting positions from your CSS percentages and convert to pixels
        let posX = bubble.position().left;
        let posY = bubble.position().top;

        function moveBubble() {
            // Get current viewport dimensions
            const winWidth = $(window).width();
            const winHeight = $(window).height();
            
            // Get bubble dimensions
            const bWidth = bubble.outerWidth();
            const bHeight = bubble.outerHeight();

            // Update position coordinates
            posX += velocityX;
            posY += velocityY;

            // --- BOUNDARY COLLISION ---
            // Horizontal bounce
            if (posX <= 0 || posX + bWidth >= winWidth) {
                velocityX *= -1; // Reverse direction
                posX = Math.max(0, Math.min(posX, winWidth - bWidth)); // Snap back inside
            }

            // Vertical bounce
            if (posY <= 0 || posY + bHeight >= winHeight) {
                velocityY *= -1; // Reverse direction
                posY = Math.max(0, Math.min(posY, winHeight - bHeight)); // Snap back inside
            }

            // Apply the new position
            bubble.css({
                left: posX + 'px',
                top: posY + 'px'
            });

            // Request the next animation frame (standard 60fps)
            requestAnimationFrame(moveBubble);
        }

        // Kick off the loop for this specific bubble
        moveBubble();
    });
});