document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a[data-tool]');
    const toolInterfaces = document.querySelectorAll('.content .tool-interface');
    const welcomeInterface = document.getElementById('welcome');
    let activeInterface = welcomeInterface; // Keep track of the currently shown interface
    let activeLink = null; // Keep track of the active link

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor link behavior

            const toolId = link.getAttribute('data-tool');
            const targetInterface = document.getElementById(toolId);

            if (targetInterface && targetInterface !== activeInterface) {
                // Hide the currently active interface
                if (activeInterface) {
                    activeInterface.classList.remove('active');
                }
                // Deactivate the previously active link
                 if (activeLink) {
                    activeLink.classList.remove('active');
                }


                // Show the target interface
                targetInterface.classList.add('active');
                activeInterface = targetInterface;

                // Activate the clicked link
                link.classList.add('active');
                activeLink = link;


            }
        });
    });

    // --- Placeholder for Future Tool Logic ---
    // Example: Add basic interaction for Character & Word Counter
    const textCounterInput = document.getElementById('text-counter-input');
    const textCounterOutput = document.getElementById('text-counter-output');

    if (textCounterInput && textCounterOutput) {
        textCounterInput.addEventListener('input', () => {
            const text = textCounterInput.value;
            const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
            const charCount = text.length;
            textCounterOutput.textContent = `Words: ${wordCount} | Characters: ${charCount}`;
        });
    }

     // Example: Add basic interaction for Password Generator Copy Button
     const copyPwButton = document.getElementById('copy-pw-button');
     const generatedPwField = document.getElementById('generated-password');

     if (copyPwButton && generatedPwField) {
         copyPwButton.addEventListener('click', () => {
             if (generatedPwField.value) {
                 generatedPwField.select();
                 generatedPwField.setSelectionRange(0, 99999); // For mobile devices
                 try {
                     document.execCommand('copy');
                     copyPwButton.textContent = 'Copied!';
                     setTimeout(() => { copyPwButton.textContent = 'Copy'; }, 2000); // Reset button text
                 } catch (err) {
                     console.error('Failed to copy text: ', err);
                     alert('Failed to copy password.'); // Fallback message
                 }
                 window.getSelection().removeAllRanges(); // Deselect
             }
         });
     }

    // Add more event listeners and functions here for each tool's specific logic
    // e.g., handling file uploads, making API calls (if using backend/external services),
    // text manipulation, data conversion logic, password generation, etc.
});