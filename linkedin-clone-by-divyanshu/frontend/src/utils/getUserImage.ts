export function getUserImage() {
  const authUser = JSON.parse(localStorage.getItem("firebaseUser") || "{}");
  const storedImage = localStorage.getItem("userImage");

  return authUser?.photoURL || storedImage || "/default avtar.jpg";
}
