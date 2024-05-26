        //Disable swipe down to Refresh App
        function preventSwipeRefresh() {
            let touchStartY = 0;

            document.addEventListener('touchstart', (event) => {
                touchStartY = event.touches[0].clientY;
            });

            document.addEventListener('touchmove', (event) => {
                const touchEndY = event.touches[0].clientY;
                const deltaY = touchEndY - touchStartY;

                if (deltaY > 0 && window.scrollY === 0) {
                    event.preventDefault();
                }
            });
        }

        // Call the function to enable the prevention
        preventSwipeRefresh();

        //Handle Back navigation
        // Function to handle the back navigation confirmation
        function handleBackNavigation() {
            window.addEventListener('popstate', function (event) {
                showBackConfirmation();
            });

            window.addEventListener('keyup', function (event) {
                if (event.key === 'Escape' || event.key === 'ArrowLeft') {
                    showBackConfirmation();
                }
            });
        }

        function showBackConfirmation() {
            if (confirm("Are you sure you want to exit Midpoint 🥹👉👈?")) {
                // If user confirms, exit the app
                window.history.back();
        } else {
            // If user cancels, prevent default behavior
            history.pushState(null, null, window.location.href);
        }
        }

        // Call the function to handle back navigation confirmation
        handleBackNavigation();