why not the students are not listed while there are students on my database i sent you both my script and my database
my database
{
  "Departments": {
    "-Oa9f9TD1xm6YAKXZlzf": {
      "cby": "hzst20180@hyranzi.com",
      "ddes": "Contains all Mathematics related subjects.",
      "desig": "Department",
      "dnm": "Mathematics",
      "hldid": "unknown",
      "hldnm": "department admin 1",
      "hlds": "none",
      "t": 1758968203266
    },
    "-Oa9h5B_2Uv737PdUCLo": {
      "cby": "hzst20180@hyranzi.com",
      "ddes": "physics related subjects",
      "desig": "Department",
      "dnm": "Physics",
      "hldid": "unknown",
      "hldnm": "Department Admin 2",
      "hlds": "none",
      "t": 1758968712993
    }
  },
  "Students Detail": {
    "2018": {
      "studentuid": {
        "adr": "Werabe",
        "age": "24",
        "bdt": "2005-07-05",
        "bh": "2018",
        "bpl": "Werabe",
        "cby": "admin@hyranzi.com",
        "dis": "no",
        "eadr": "Silte",
        "eml": "Mulukenmaregn2@gmail.com",
        "enm": "Ali Genom",
        "epno": "0923456788",
        "ern": "Father",
        "faadr": "Silte",
        "fanm": "Ali Genom",
        "fapno": "0923456788",
				"moadr": "Silte",
        "monm": "Hebrela Dandino",
        "mopno": "0916060610",
        "nat": "Ethiopia",
        "ps": "12345678",
        "stdes": "Final Trail 1.1",
        "t": 1759682080365,
        "uid": "studentuid"
      }
    }
  },
  "Students Grade": {
    "G9": {
      "studentuid": {
        "studentuid": {
          "fnm": "Mehammed:Ali:Genom",
          "sex": "male"
        }
      }
    }
  },
  "Students List": {
    "2018": {
      "studentuid": {
        "fnm": "Mehammed:Ali:Genom",
        "gr": "G9",
        "pno": "0995700571",
        "sec": "unallocated",
        "sex": "male",
        "sid": "hzst20181",
        "ss": "a"
      }
    }
  },
  "Teachers Detail": {
    "yDXrUHT2trNXS4Ax49NXqrF0sTt2": {
      "adr": "BUTAJIRA, KELA",
      "age": "25",
      "cby": "hzst20180@hyranzi.com",
      "desig": "Teacher",
      "dis": "no",
      "djh": "2025-09-29",
      "eadr": "Werabe",
      "enm": "Lecture 2",
      "epno": "0707219730",
      "ern": "Realative",
      "loe": "Degree",
      "mtdes": "Trail start",
      "nat": "Ethiopia",
      "ps": "012345678",
      "sry": "5000",
      "ss": "a",
      "t": 1759121293732,
      "uid": "yDXrUHT2trNXS4Ax49NXqrF0sTt2",
      "wdu": "Chemistry",
      "yoe": "1",
      "yog": "2025-09-29"
    }
  },
  "Teachers List": {
    "yDXrUHT2trNXS4Ax49NXqrF0sTt2": {
      "eml": "Mulukenmaregn2@gmail.com",
      "fnm": "Lecture 1:Hayranzi:School",
      "fos": "Physics",
      "pno": "0707219730",
      "sex": "male",
      "teid": "hzth1"
    }
  },
  "classes": {
    "-OSDTZCFVqtpm2OATitD": {
      "grade": "Grade 9",
      "sectionName": "A"
    },
    "grade9": {
      "-Oao10FoutjflKlXe-3s": {
        "capacity": 67,
        "name": "G9A"
      },
      "-Oao195KaxggwAberBwb": {
        "capacity": 67,
        "name": "G9B"
      }
    }
  },
  "counters": {
    "students": {
      "2018": 1
    },
    "teachers": 3
  },
  "departments": {
    "-OSDZi2JW_FQvi1JvatZ": {
      "description": "Math",
      "headOfDepartmentId": "",
      "name": "Mathemathics"
    }
  },
  "students": {
    "-OSDTkAYganBwTJYJgNv": {
      "classSectionId": "-OSDTZCFVqtpm2OATitD",
      "firstName": "Stephen",
      "grade": "Grade 9",
      "lastName": "Jackel",
      "studentIdNo": "STU001"
    }
  },
  "subjects": {
    "-OSDU97S93V9X3D1Ms8M": {
      "code": "MATH101",
      "departmentName": "Math Department",
      "name": "Mathemathics"
    }
  },
  "teachers": {
    "-OSDZpw0r5MRlujDN1o1": {
      "departmentName": "Math Department",
      "email": "hayranzi@gmail.com",
      "firstName": "Stephen",
      "lastName": "Jackel",
      "subjectsTaught": "Math"
    }
  },
  "timetableEntries": {
    "-OSDZyCK18PpKtUCQmfk": {
      "classSectionName": "Grade 9 - Section A",
      "day": "Monday",
      "room": "Room1",
      "subjectName": "Mathemathics",
      "teacherName": "Stephen Jackel",
      "timeSlot": "9-10"
    },
    "-OSD_B_pD4ugUePZFaeb": {
      "classSectionName": "Grade 9 - Section A",
      "day": "Monday",
      "room": "Room2",
      "subjectName": "Mathemathics",
      "teacherName": "Stephen Jackel",
      "timeSlot": "9-10"
    }
  }
}
my script

		import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
		import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";

		const firebaseConfig = {
			apiKey: "AIzaSyAJXtAhCNGsDci-w1ww8gwGu23aAE6L_CM",
			authDomain: "hyranzi.firebaseapp.com",
			databaseURL: "https://hyranzi-default-rtdb.firebaseio.com",
			projectId: "hyranzi",
			storageBucket: "hyranzi.firebasestorage.app",
			messagingSenderId: "545023994494",
			appId: "1:545023994494:web:eb2028aa0d4423f51a062f",
			measurementId: "G-Y9G3FY6HJ0"
		};

		const app = initializeApp(firebaseConfig);
		const db = getDatabase(app);

		const tbody = document.querySelector('#student_allocation_table tbody');

		// State Variables for Filtering
		// NOTE: Assuming student 'gr' value is the number (9, 10, 11, 12).
		let activeGradeKey = 'grade9'; 
		let activeGradeValue = '9'; 
		let activeClass = 'Unallocated';

		// --- Core Functions ---

		/**
		 * Sets up event listeners for the main grade tabs.
		 */
		function setupGradeTabs() {
			document.querySelectorAll('#main-grade-tabs .nav-link').forEach(link => {
				link.addEventListener('click', function(e) {
					e.preventDefault();
					
					// Update active state for main tabs
					document.querySelectorAll('#main-grade-tabs .nav-link').forEach(l => l.classList.remove('active'));
					this.classList.add('active');

					// Update active state variables
					activeGradeKey = this.getAttribute('data-grade-key');
					activeGradeValue = this.getAttribute('data-grade-val');
					activeClass = 'Unallocated'; // Reset to Unallocated view
					
					// Load classes and then students for the new grade
					loadClassesForGrade(activeGradeKey);
				});
			});
		}

		/**
		 * Fetches registered classes for the active grade and dynamically builds class tabs.
		 * @param {string} gradeKey - The database key for the grade (e.g., 'grade9').
		 */
		async function loadClassesForGrade(gradeKey) {
			const classTabsContainer = document.getElementById('class-tabs');
			classTabsContainer.innerHTML = ''; 

			// Always add 'Unallocated' tab first and set it as active
			const unallocatedTab = document.createElement('li');
			unallocatedTab.className = 'nav-item';
			unallocatedTab.innerHTML = `<a class="nav-link active" data-class-name="Unallocated" href="#">Unallocated</a>`;
			classTabsContainer.appendChild(unallocatedTab);

			// Get registered classes from Firebase
			try {
				const classesRef = ref(db, `classes/${gradeKey}`);
				const snap = await get(classesRef);
				const classes = snap.val();

				if (classes) {
					Object.entries(classes).forEach(([key, data]) => {
						const classTab = document.createElement('li');
						classTab.className = 'nav-item';
						// data.name holds the class name, e.g., 'G9A'
						classTab.innerHTML = `<a class="nav-link" data-class-name="${data.name}" href="#">${data.name}</a>`;
						classTabsContainer.appendChild(classTab);
					});
				}
			} catch (err) {
				console.error("Error loading classes:", err);
			}

			// Setup handlers for the new tabs and load the initial 'Unallocated' student list
			setupClassTabs(classTabsContainer);
			loadStudents(activeGradeValue, activeClass);
		}

		/**
		 * Sets up event handlers for the dynamically created class tabs.
		 * @param {HTMLElement} container - The #class-tabs ul element.
		 */
		function setupClassTabs(container) {
			container.querySelectorAll('.nav-link').forEach(link => {
				link.addEventListener('click', function(e) {
					e.preventDefault();
					
					// Update active state for class tabs
					container.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
					this.classList.add('active');

					activeClass = this.getAttribute('data-class-name');
					
					// Load students based on the selected class
					loadStudents(activeGradeValue, activeClass);
				});
			});
		}

		/**
		 * Fetches and displays students filtered by active grade and active class/section.
		 * @param {string} gradeValue - The student data grade value (e.g., '9').
		 * @param {string} className - The selected class name ('Unallocated' or 'G9A').
		 */
		async function loadStudents(gradeValue, className) {
			tbody.innerHTML = '<tr><td colspan="5" class="text-center">Loading students...</td></tr>';
			document.getElementById('table-info').textContent = `Showing students for Grade ${gradeValue}, Class: ${className}`;

			try {
				const snap = await get(ref(db, 'Students List'));
				if (!snap.exists()) {
					tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No students found.</td></tr>';
					return;
				}

				const allStudents = snap.val();
				let filteredStudents = [];

				// Flatten and filter:
				Object.entries(allStudents).forEach(([batch, group]) => {
					if (!group) return;
					Object.entries(group).forEach(([uid, data]) => {
						const student = Object.assign({}, data);
						student._uid = uid;
						student._batch = batch;
						
						// 1. Filter by Grade (e.g., student.gr == '9')
						if (student.gr == gradeValue) {
							// 2. Filter by Class/Section status
							const isAllocated = student.section && student.section !== 'unallocated';

							if (className === 'Unallocated' && !isAllocated) {
								filteredStudents.push(student);
							} else if (isAllocated && student.section === className) {
								filteredStudents.push(student);
							}
						}
					});
				});

				// Render table rows
				let html = '';
				if (filteredStudents.length === 0) {
					html += `<tr><td colspan="5" class="text-center text-muted">No students in ${className} section for Grade ${gradeValue}.</td></tr>`;
				} else {
					filteredStudents.forEach(s => {
						html += createStudentRow(s, className);
					});
				}

				tbody.innerHTML = html;
				attachHandlers(className);

			} catch (err) {
				console.error(err);
				tbody.innerHTML = `<tr><td colspan="5" class="text-center text-danger">Error loading students</td></tr>`;
			}
		}

		/**
		 * Creates the HTML table row for a single student.
		 */
		function createStudentRow(s, currentView) {
			// Student Name is stored as 'First:Middle:Last'
			const studentName = s.fnm ? s.fnm.split(":").join(' ') : (s.eml || 'N/A');
			let actionCell;
			let classCell;

			if (currentView === 'Unallocated') {
				// Show class selector and Allocate button
				const classTabs = document.querySelectorAll('#class-tabs .nav-link');
				// Get available class names, excluding 'Unallocated'
				const availableClasses = Array.from(classTabs)
					.filter(tab => tab.getAttribute('data-class-name') !== 'Unallocated')
					.map(tab => tab.getAttribute('data-class-name'));

				const options = availableClasses.map(cls => `<option value="${cls}">${cls}</option>`).join('');

				classCell = 'N/A';
				actionCell = `<td>
								<select class="form-select form-select-sm alloc-section me-2" style="width:100px; display:inline-block;">
									<option value="">Select Class</option>
									${options}
								</select>
								<button class="btn btn-success btn-sm btn-allocate" data-uid="${s._uid}" data-batch="${s._batch}">Allocate</button>
							</td>`;

			} else {
				// Show class name and Unallocate button
				classCell = s.section || 'Unspecified';
				actionCell = `<td>
								<button class="btn btn-danger btn-sm btn-unallocate" data-uid="${s._uid}" data-batch="${s._batch}">Unallocate</button>
							</td>`;
			}

			return `<tr data-uid="${s._uid}" data-batch="${s._batch}">
						<td>${s.sid || s._uid.substring(0, 8)}</td>
						<td>${studentName}</td>
						<td>${s.gr}</td>
						<td>${classCell}</td>
						${actionCell}
					</tr>`;
		}

		/**
		 * Attaches click handlers to the Allocate or Unallocate buttons.
		 */
		function attachHandlers(className) {
			if (className === 'Unallocated') {
				document.querySelectorAll('.btn-allocate').forEach(btn => {
					btn.removeEventListener('click', onAllocate);
					btn.addEventListener('click', onAllocate);
				});
			} else {
				document.querySelectorAll('.btn-unallocate').forEach(btn => {
					btn.removeEventListener('click', onUnallocate);
					btn.addEventListener('click', onUnallocate);
				});
			}
		}

		/**
		 * Handles student allocation, updating 'Students List' and 'Students Grade'.
		 */
		async function onAllocate(evt) {
			const btn = evt.currentTarget;
			const tr = btn.closest('tr');
			const uid = btn.getAttribute('data-uid');
			const batch = btn.getAttribute('data-batch');
			const sectionSelect = tr.querySelector('.alloc-section');
			const section = sectionSelect ? sectionSelect.value : null;

			if (!section) return alert('Please select a class before allocating.');

			btn.disabled = true;
			btn.innerText = 'Allocating...';

			try {
				const studentsListPath = `Students List/${batch}/${uid}`;
				const studentsGradePath = `Students Grade/${activeGradeValue}/${section}/${uid}`;
				const updates = {};
				
				// 1. Set 'section' in the student's main record
				updates[`${studentsListPath}/section`] = section;

				// 2. Add student entry to the specific class list
				// NOTE: I am reconstructing the object for 'Students Grade' based on the visible table data. 
				updates[studentsGradePath] = {
					fnm: tr.cells[1].textContent, 
					sex: 'N/A', // Placeholder: You should retrieve actual 'sex' from the full student object
					// Add other required basic info (e.g., student ID, grade) if necessary for this path
				};

				await update(ref(db), updates);
				alert(`Student allocated to ${section} successfully!`);
				await loadStudents(activeGradeValue, activeClass); // Reload current view
			} catch (err) {
				console.error(err);
				alert('Allocation failed. See console for details.');
			}
		}

		/**
		 * Handles student unallocation, removing 'section' from 'Students List' and deleting from 'Students Grade'.
		 */
		async function onUnallocate(evt) {
			const btn = evt.currentTarget;
			const tr = btn.closest('tr');
			const uid = btn.getAttribute('data-uid');
			const batch = btn.getAttribute('data-batch');
			const currentSection = activeClass; 

			if (!confirm(`Are you sure you want to unallocate this student from ${currentSection}?`)) return;

			btn.disabled = true;
			btn.innerText = 'Unallocating...';

			try {
				const studentsListPath = `Students List/${batch}/${uid}`;
				const studentsGradePath = `Students Grade/${activeGradeValue}/${currentSection}/${uid}`;
				const updates = {};

				// 1. Set 'section' to null in the student's main record
				updates[`${studentsListPath}/section`] = null;

				// 2. Remove student entry from the specific class list
				updates[studentsGradePath] = null; 

				await update(ref(db), updates);
				alert(`Student unallocated from ${currentSection} successfully!`);
				await loadStudents(activeGradeValue, activeClass); // Reload current view
			} catch (err) {
				console.error(err);
				alert('Unallocation failed. See console for details.');
			}
		}

		// --- Initialization ---
		document.addEventListener('DOMContentLoaded', () => {
			setupGradeTabs();
			// Initial call to load classes and then students for the default active grade (Grade 9)
			loadClassesForGrade(activeGradeKey);
		});
give me a better script or show me an error to make changes