import axios from "axios";

export async function logout() {
  // Clear local storage
  localStorage.clear();

  // Function to delete a cookie
  await axios
    .get("/api/auth/logout")
    .then((response) => {})
    .catch((error) => {});
  // Delete the auth cookie (or any other cookies you want to clear)

  // Optionally, delete other cookies if necessary
  // deleteCookie('otherCookieName');

  // Redirect to the login page or homepage
  window.location.href = "/login";
}
