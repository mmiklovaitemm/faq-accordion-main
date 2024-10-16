// Select all the question elements
document.querySelectorAll(".faqQuestion").forEach((question) => {
    // Handle both click and keydown (for keyboard users)
    const toggleAnswer = (e) => {
        if (e.type === "click" || e.key === "Enter" || e.key === " ") {
            // Get the parent `faqQuestionContainer`
            const questionContainer = e.target.closest(".faqQuestionContainer");
            // Find the `faqAnswer` div inside the container
            const answer = questionContainer.querySelector(".faqAnswer");

            // Close all other FAQ answers
            document.querySelectorAll(".faqAnswer").forEach((faqAnswer) => {
                if (faqAnswer !== answer) {
                    faqAnswer.style.display = "none";
                }
            });

            // Reset all other icons back to the plus icon
            document.querySelectorAll(".plusIcon").forEach((icon) => {
                icon.src = "./assets/images/icon-plus.svg";
            });

            // Toggle the clicked FAQ answer visibility
            if (answer.style.display === "block") {
                answer.style.display = "none";
                question.querySelector(".plusIcon").src = "./assets/images/icon-plus.svg"; // Set back to plus icon
            } else {
                answer.style.display = "block";
                question.querySelector(".plusIcon").src = "./assets/images/icon-minus.svg"; // Switch to minus icon
            }
        }
    };

    // Attach event listeners
    question.addEventListener("click", toggleAnswer);
    question.addEventListener("keydown", toggleAnswer); // For keyboard users
});
