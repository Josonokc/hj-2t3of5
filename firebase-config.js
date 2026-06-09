// ─── Steps to fill this in ───────────────────────────────────────────────────
// 1. Go to https://console.firebase.google.com → New project (skip Analytics)
// 2. Left sidebar → Build → Realtime Database → Create database
//    Pick any region → Start in Test mode → Done
// 3. Left sidebar → Project settings (gear icon) → Your apps → </> (Web)
//    Register app (any nickname) → copy the firebaseConfig object shown
// 4. Replace every "REPLACE_ME" below with your real values, then push
// 5. Bump sw.js CACHE string (e.g. add -b) so devices fetch this fresh file
// ─────────────────────────────────────────────────────────────────────────────
var FIREBASE_CONFIG = {
  apiKey:            "REPLACE_ME",
  authDomain:        "REPLACE_ME.firebaseapp.com",
  databaseURL:       "https://REPLACE_ME-default-rtdb.firebaseio.com",
  projectId:         "REPLACE_ME",
  storageBucket:     "REPLACE_ME.appspot.com",
  messagingSenderId: "REPLACE_ME",
  appId:             "REPLACE_ME"
};
