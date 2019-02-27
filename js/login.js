function push () {
  // document.login.reset();
  let e = document.getElementById("login_name");
  name = e.value;

  window.sessionStorage.setItem(['user_name'],[name]);
  // document.login.reset();
}
