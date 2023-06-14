export default function authHeader(): {Authorization: string} | {} {
  const token = JSON.parse(localStorage.getItem("accessToken") || '{}');

  if (token) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { "Authorization": "Bearer " +token};
  } else {
    return {};
  }
}
