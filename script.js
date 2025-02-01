// Check if the user is already logged in
window.onload = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showProfilePage();
    }
};

// Show Profile Page
function showProfilePage() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("sign-up-section").style.display = "none";
        document.getElementById("profile-section").style.display = "block";
        const user = JSON.parse(localStorage.getItem(loggedInUser));
        document.getElementById("user-name").innerText = user.username;
    }
}

// Handle Sign Up Form
document.getElementById("sign-up-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = { username, email, password };

    // Save the user to localStorage
    localStorage.setItem(username, JSON.stringify(userData));
    localStorage.setItem("loggedInUser", username);

    showProfilePage();
});

// Handle Log Out
function logOut() {
    localStorage.removeItem("loggedInUser");
    showSignInPage();
}

// Redirect to Subject Page on Enroll
function enrollCourse(subject) {
    const pages = {
        Mathematics: "math.html",
        Science: "science.html",
        History: "history.html",
        Computer: "computer.html",
    };

    if (pages[subject]) {
        window.location.href = pages[subject]; // Redirect to the corresponding page
    } else {
        alert("Invalid subject selected.");
    }
}

// Show Sign In Page
function showSignInPage() {
    document.getElementById("sign-up-section").style.display = "block";
    document.getElementById("profile-section").style.display = "none";
}

// Filter Courses
function filterCourses() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const selectedCategory = document.getElementById("categoryFilter").value;
    const courses = document.querySelectorAll(".card");

    courses.forEach((course) => {
        const courseCategory = course.getAttribute("data-category");
        const courseTitle = course.querySelector("h3").innerText.toLowerCase();

        if (
            (searchQuery === "" || courseTitle.includes(searchQuery)) &&
            (selectedCategory === "" || courseCategory === selectedCategory)
        ) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}
// Show user profile details
function viewProfile() {
    alert("Redirecting to your profile page...");
    // You can redirect to a profile page if needed
    // window.location.href = "profile.html";
}

// Show enrolled courses
function viewCourses() {
    alert("Here are your enrolled courses...");
    // Implement logic to display user's enrolled courses
}

// Open settings page
function openSettings() {
    alert("Redirecting to settings...");
    // Redirect or open a settings page
    // window.location.href = "settings.html";
}

// Log out functionality
function logOut() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    // Redirect to the home or login page
    window.location.href = "index.html";
}
