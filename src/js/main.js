export const metaTags = (name, description) => {
  let title = "Pay or donate to " + name;

  // Set title tag
  document.title = title;

  // Set meta tag (title)
  let meta = document.querySelectorAll("meta")[2];
  meta.setAttribute("content", title);

  // Set meta tag (description)
  meta = document.querySelectorAll("meta")[3];
  meta.setAttribute("content", description);

  // Set meta tag (og:url)
  meta = document.querySelectorAll("meta")[5];
  meta.setAttribute("og:url", window.location);

  // Set meta tag (og:title)
  meta = document.querySelectorAll("meta")[6];
  meta.setAttribute("og:title", title);

  // Set meta tag (og:description)
  meta = document.querySelectorAll("meta")[7];
  meta.setAttribute("og:description", description);

  // Set meta tag (twitter:url)
  meta = document.querySelectorAll("meta")[10];
  meta.setAttribute("twitter:url", window.location);

  // Set meta tag (twitter:title)
  meta = document.querySelectorAll("meta")[11];
  meta.setAttribute("twitter:title", title);

  // Set meta tag (twitter:description)
  meta = document.querySelectorAll("meta")[12];
  meta.setAttribute("twitter:description", description);
};
