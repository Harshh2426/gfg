let pagal = document.getElementById("pagal");
pagal.addEventListener("click", func);

let bttn=document.getElementById("bttn");
bttn.addEventListener("click",func);

function func() {
  open(
    "https://practice.geeksforgeeks.org/courses/complete-interview-preparation?utm_source=geeksforgeeks&utm_medium=in_article_native&utm_campaign=targetcourse",
    "_blank"
  );
}
