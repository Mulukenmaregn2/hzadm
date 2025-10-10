
    import { initializeApp, deleteApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
    import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
    import { getDatabase, get, ref, update, push, set, serverTimestamp, onValue, off } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";

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
    const auth = getAuth(app);
    const db = getDatabase(app);
    const deptRef = ref(db, "Departments/");
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`Signed in as: ${user.email || ''}`);
		document.querySelectorAll('.ademail')[0].innerText = user.email;
		document.querySelectorAll('.ademail')[1].innerText = user.email;
    document.querySelectorAll('.adnm')[0].innerText = user.displayName || "Hyranzi Team";
    document.querySelectorAll('.adnm')[1].innerText = user.displayName || "Hyranzi Team";
    document.querySelectorAll('.adnm')[2].innerText = user.displayName || "Hyranzi Team";
		//showToast(y);
		refreshtb();
  } else {
    window.location.href = "index.html";
  }
});


function pad(n){ return n.toString().padStart(2,'0'); }
function getHourKey() {
  const d = new Date();
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}${pad(d.getHours())}`; // e.g. 2025092814
}
		async function waitForConnection(db, timeout = 5000) {
      return new Promise((resolve) => {
        const connectedRef = ref(db, ".info/connected");
        let done = false;
        const timer = setTimeout(() => {
          if (!done) { done = true; off(connectedRef); resolve(false); }
        }, timeout);

        onValue(connectedRef, (snap) => {
          if (done) return;
          if (snap && snap.val() === true) {
            done = true;
            clearTimeout(timer);
            off(connectedRef);
            resolve(true);
          }
        });
      });
    }
		async function refreshtb(){
  // 1) Try session cache
  try {
    const raw = sessionStorage.getItem('sessionDepartments');
    if (raw) {
      const obj = JSON.parse(raw);
      if (obj && obj.key === getHourKey() && obj.data) {
        // cached and within same hour — render and still attach listener below
        renderDepartments(obj.data);
        // still proceed to attach realtime listener / exit early
        attachDeptListenerOnce();
        return;
      }
    }
  } catch(e){
    console.warn('Invalid session cache', e);
  }

  // 2) Not cached for this hour — ensure connectivity then fetch
  if (!await waitForConnection(db, 5000)) {
    console.warn("Offline: cannot load departments. Check your internet.");
    return;
  }
  try {
    const snapshot = await get(deptRef);
    if (snapshot.exists()) {
      const depts = snapshot.val();
      // save to session with current hour key
      try {
        sessionStorage.setItem('sessionDepartments', JSON.stringify({ key: getHourKey(), data: depts }));
      } catch(e) { console.warn('Failed to save session cache', e); }
      renderDepartments(depts);
    } else {
      renderDepartments({});
      console.log("no data");
    }
  } catch (err) {
    console.error(err);
    showToast("Error loading departments: " + err.message);
  }

  // attach realtime listener to keep UI in sync when server changes
  attachDeptListenerOnce();
}

function renderDepartments(depts = {}) {
  const list = document.querySelector('#departments ul');
  if (!list) return;
  list.innerHTML = '';
  const keys = Object.keys(depts || {}).sort();
  if (keys.length === 0) {
    list.innerHTML = `<li class="nav-item"><a class="nav-link"><span class="nav-link-text text-muted">No departments</span></a></li>`;
    return;
  }
  keys.forEach(key => {
    const d = depts[key] || {};
    list.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="departments.html?dept=${encodeURIComponent(d.dnm || '')}"><span class="nav-link-text">${d.dnm || '—'}</span></a>
      </li>`;
  });
}

function attachDeptListenerOnce() {
  if (window.__deptListenerAttached) return;
  window.__deptListenerAttached = true;
  onValue(deptRef, (snap) => {
    const latest = snap.exists() ? snap.val() : {};
    try { sessionStorage.setItem('sessionDepartments', JSON.stringify({ key: getHourKey(), data: latest })); } catch(e){/*ignore*/ }
    renderDepartments(latest);
  }, (err) => {
    console.warn('Realtime listener error', err);
  });
}