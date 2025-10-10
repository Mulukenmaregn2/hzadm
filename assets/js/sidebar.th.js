var x = `
				<div class="menu-content-wrap">
					<div class="menu-group">
						<ul class="navbar-nav flex-column">
							<li class="nav-item">
								<a class="nav-link" href="home.html">
									<span class="nav-icon-wrap">
										<i class="zmdi zmdi-view-dashboard"></i>
									</span>
									<span class="nav-link-text">Dashboard</span>
									<span class="badge badge-sm badge-soft-pink ms-auto">Hot</span>
								</a>
							</li>
						</ul>	
					</div>
					<div class="menu-gap"></div>
					<div class="menu-group">
						<div class="nav-header">
							<span>Registration and Management</span>
						</div>
						<ul class="navbar-nav flex-column">
							${createMenuItem("Student", "studentReg", [ ["students_list.html", "Students List"],["student_register.html", "Register Student"],
                ["student_allocation.html", "Student Allocation"]
              ],"ri-contacts-fill")}
							${createMenuItem("Teacher", "teacherReg", [ ["#", "Teachers List"],["teacher_register.html", "Register Teacher"],
                ["teacher_allocation.html", "Teacher Allocation"]
              ],"ri-git-merge-line")}
						</ul>
					</div>
					<div class="menu-gap"></div>
					<div class="menu-gap"></div>
				</div>`;
        document.getElementsByClassName('nicescroll-bar')[0].innerHTML = x;

        function createMenuItem(title, id, links, icon = "ri-registered-fill") {
  const children = links.map(([href, text]) => `
    <li class="nav-item">
      <a class="nav-link" href="${href}"><span class="nav-link-text">${text}</span></a>
    </li>`).join("");

  return `
    <li class="nav-item">
      <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#${id}" aria-controls="${id}">
        <span class="nav-icon-wrap"><i class="${icon} fs-5"></i></span>
        <span class="nav-link-text">${title}</span>
      </a>
      <ul id="${id}" class="nav flex-column collapse nav-children">
        <li class="nav-item"><ul class="nav flex-column">${children}</ul></li>
      </ul>
    </li>`;
}
function gowindow(view){
  document.querySelectorAll('.nicescroll-bar .nav-link-text').forEach(function(element,index){
    if(document.querySelectorAll('.nicescroll-bar .nav-link-text')[index].innerText != view){
      document.querySelectorAll('.nicescroll-bar .nav-link-text')[index].parentNode.parentElement.classList.remove('active');
      var y = document.querySelectorAll('.nicescroll-bar .nav-link-text')[index].parentNode.parentNode.parentNode.parentNode.parentElement;
      if(y.parentElement.classList.contains('active')){
        y.parentElement.classList.remove('active');
      }
      if (y.parentElement.querySelector('a').hasAttribute('aria-expanded')) {
        y.parentElement.querySelector('a').removeAttribute('aria-expanded');
      }
      if(y.classList.contains('show')){
        y.classList.remove('show');
        alert("removed")
      }
    }
  });
  document.querySelectorAll('.nicescroll-bar .nav-link-text').forEach(function(element,index){
    if(document.querySelectorAll('.nicescroll-bar .nav-link-text')[index].innerText == view){
      document.querySelectorAll('.nicescroll-bar .nav-link-text')[index].parentNode.parentElement.classList.add('active');
      var y = document.querySelectorAll('.nicescroll-bar .nav-link-text')[index].parentNode.parentNode.parentNode.parentNode.parentElement;
      y.classList.add('show');
      y.parentElement.classList.add('active');
      if (y.parentElement.querySelector('a').hasAttribute('aria-expanded')) {} else{
        y.parentElement.querySelector('a').setAttribute('aria-expanded', 'true');
      }
    }
  });
}