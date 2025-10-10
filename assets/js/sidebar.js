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
									<span class="badge badge-sm badge-soft-pink ms-auto">Home</span>
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
							${createMenuItem("Teacher", "teacherReg", [ ["teachers_list.html", "Teachers List"],["teacher_register.html", "Register Teacher"],
                ["teacher_allocation.html", "Teacher Allocation"]
              ],"ri-git-merge-line")}
							${createMenuItem("Class & Department", "CandDReg", [ ["class_registration.html", "Class Registration"],["department_registration.html", "Department Registration"],],
              "ri-community-fill")}
							${createMenuItem("Subject & Time table", "dash_chat", [ 
                ["subject_register.html", "Subject Registration"],["time_table.html", "Time Table"]
              ])}
              ${createMenuItem("Departments", "departments", [ ], "ri-menu-fill")}
              ${createMenuItem("Academic Progress", "academic", [ ], "zmdi zmdi-ruler")}
						</ul>
					</div>
					<div class="menu-gap"></div>
					<div class="menu-gap"></div>
				</div>`;
// ["student_register.html", "Math Department"],["#", "Language Department"],["#", "Natural Science Department"],["#", "Social Science Department"],["#", "Sport Department"]
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

var y = `
				<ul class="navbar-nav flex-row">
					<li class="nav-item">
						<a href="#" class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"><span class="icon"><span class=" position-relative"><span class="feather-icon"><i data-feather="inbox"></i></span><span class="badge badge-sm badge-soft-primary badge-sm badge-pill position-top-end-overflow-1">0</span></span></span></a>
					</li>
					<li class="nav-item">
						<div class="dropdown dropdown-notifications">
							<a href="#" class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown" data-dropdown-animation role="button" aria-haspopup="true" aria-expanded="false"><span class="icon"><span class="position-relative"><span class="feather-icon"><i data-feather="bell"></i></span><span class="badge badge-success badge-indicator position-top-end-overflow-1"></span></span></span></a>
							<div class="dropdown-menu dropdown-menu-end p-0">
								<h6 class="dropdown-header px-4 fs-6">Notifications<a href="#" class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"><span class="icon"><span class="feather-icon"><i data-feather="settings"></i></span></span></a>
								</h6>
								<div data-simplebar class="dropdown-body  p-2">
									<a href="javascript:void(0);" class="dropdown-item">
										<div class="media">
											<div class="media-head">
												<div class="avatar avatar-rounded avatar-sm">
													<img src="assets/img/hz_logo_md.png" alt="user" class="avatar-img">
												</div>
											</div>
											<div class="media-body">
												<div>
													<div class="notifications-text">Welcome to Hayranzi Special Boarding Secondary School</div>
													<div class="notifications-info">
														<span class="badge badge-soft-success">Collaboration</span>
														<div class="notifications-time">Today</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-footer"><a href="#"><u>View all notifications</u></a></div>
							</div>
						</div>
					</li>
					<li class="nav-item">
						<div class="dropdown ps-2">
							<a class=" dropdown-toggle no-caret" href="#" role="button" data-bs-display="static" data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="outside" aria-expanded="false">
								<div class="avatar avatar-rounded avatar-xs">
									<img src="assets/img/no-avatar_male.jpg" alt="user" class="avatar-img">
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-end">
								<div class="p-2">
									<div class="media">
										<div class="media-head me-2">
											<div class="avatar avatar-primary avatar-sm avatar-rounded">
												<span class="initial-wrap">Hk</span>
											</div>
										</div>
										<div class="media-body">
											<div class="dropdown">
												<a href="#" class="d-block dropdown-toggle link-dark fw-medium adnm"  data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="inside">Hyranzi admin</a>
												<div class="dropdown-menu dropdown-menu-end">
													<div class="p-2">
														<div class="media align-items-center active-user mb-3">
															<div class="media-head me-2">
																<div class="avatar avatar-primary avatar-xs avatar-rounded">
																	<span class="initial-wrap">Hz</span>
																</div>
															</div>
															<div class="media-body">
																<a href="#" class="d-flex align-items-center link-dark"><span class="adnm">Hayranzi</span> <i class="ri-checkbox-circle-fill fs-7 text-primary ms-1"></i></a>
																<a href="#" class="d-block fs-8 link-secondary"><u>Manage your account</u></a>
															</div>
														</div>
														<div class="media align-items-center mb-3">
															<div class="media-head me-2">
																<div class="avatar avatar-xs avatar-rounded">
																	<img src="assets/img/no-avatar_male.jpg" alt="user" class="avatar-img">
																</div>
															</div>
															<div class="media-body">
																<a href="#" class="d-block link-dark adnm">Hyranzi Team</a>
																<a href="#" class="d-block fs-8 link-secondary ademail">contact @ hyranzi</a>
															</div>
														</div>
														<button class="btn btn-block btn-outline-light btn-sm">
															<span><span class="icon"><span class="feather-icon"><i data-feather="plus"></i></span></span>
															<span>Add Account</span></span>
														</button>
													</div>
												</div>
											</div>
											<div class="fs-7 ademail">contact @ hyranzi</div>
											<a href="index.html" class="d-block fs-8 link-secondary"><u>Sign Out</u></a>
										</div>
									</div>
								</div>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Profile</a>
								<a class="dropdown-item" href="index.html">Log Out</a>
							</div>
						</div>
					</li>
				</ul>`;
document.querySelector(".nav-end-wrap").innerHTML = y;
    /*
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Display user info
    var y = `Signed in as: ${user.email}`;
		document.querySelectorAll('.ademail')[0].innerText = user.email;
		document.querySelectorAll('.ademail')[1].innerText = user.email;
		//showToast(y);
    console.log(y);
		refreshtb();
  } else {
    window.location.href = "Login.html";
  }
});*/