// how to console.log the name of the current react component in javascript
// Dynamic File-Based Routing
// dynamically generate NavLinks using react-router-dom by looking at my file structure

      <div className={styles.navigation__logo}>
        <ReactLogo width="40px" height="40px" fill="black" />
      </div>
      <div className={styles.navigation__menu}>
        <Link to="/">
          <p className={styles.navigation__item}>Home</p>
        </Link>
        <Link to="/dashboard">
          <p className={styles.navigation__item}>Dashboard</p>
        </Link>
      </div>

// console.info("info");
// console.log("log");
// console.warn("warn");


// ✅ let store = new StoreData();

// ✅ store.add('name', 'joe');
// ✅ store.add('age', 30);

// ✅ console.log(store.has('age'));    // return true
// ✅ console.log(store.has('animal')); // return false

// ✅ store.add('name', 'emma');

// store.on('change:name', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});

// store.add('name', 'john');

// store.on('age', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});

// store.add('age', 26);

// store.on('change:age', (old_val, new_val, key)=>{console.log(`${old_val > new_val ? 'older now' : ''}`)});

// store.add('age', 28);
// store.add('age', 45);