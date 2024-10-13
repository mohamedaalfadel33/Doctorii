export async function logout() {
  // Clear local storage
  localStorage.clear();

  // Function to delete a cookie
  const deleteCookie = (token: string = "token") => {
    document.cookie = `${token}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  };

  // Delete the auth cookie (or any other cookies you want to clear)
  deleteCookie("token");

  // Optionally, delete other cookies if necessary
  // deleteCookie('otherCookieName');

  // Redirect to the login page or homepage
  window.location.href = "/login";
}
