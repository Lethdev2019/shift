const fs = require('fs');

class ShiftDB {
  constructor(entry) {
    this.entry = entry;
    this.db = JSON.parse(fs.readFileSync(`${this.entry}`));
  }
  /**
   * @returns all the keys in the database
   */
  getAll() {
    this.db.forEach(digit => {
      let k = digit.key;
      let v = digit.value;
      let s = 'Key: ' + k + ', Value: ' + v;
      console.log(s);
    });
  }
  /**
   *
   * @param key database key
   * @returns the value of key
   */
  get(key) {
    this.db.filter((x) => {
      if (x.key === key) {
        console.log(x.value);
      }
    });
  }

  /**
   *
   * @param key database key
   * @param value key value
   * @returns sets a key
   */
  set(key, value) {
    const data = {
      key: key,
      value: value
    };
    this.db.push(data);
    fs.writeFile(`${this.entry}`, JSON.stringify(this.db), (err) => {
      if (err) throw err;
    });
  }

  /**
   * @param key database key
   * @returns deletes the key
   */
  del(key) {
    this.db.filter((x) => {
      if (x.key === key) {
        let index = this.db.indexOf(x);
        this.db.splice(index, 1);
        fs.writeFile(`${this.entry}`, JSON.stringify(this.db), (err) => {
          if (err) throw err;
        });
      }
    });
  }
  /**
   * @param key database key
   * @param seconds number of seconds
   * @returns deletes the key after the seconds that you entered
   */
  expire(key, seconds) {
    let secs = seconds * 1000;
    setTimeout(() => {
      this.del(key);
    }, secs);
  }

  /**
   * @param key database key
   * @param value key value
   * @param rest rest keys
   * @returns sets a key with the value, and then sets the rest of the keys with the same value
   */
  multiset(key, value, ...rest) {
    this.set(key, value);
    rest.forEach((r) => {
      this.set(r, value);
    });
  }

  /**
   * @param key database key
   * @param nkey the new database key
   * @returns renames the old database key with the new database key
   */
  rename(key, nkey) {
    this.db.find((x) => {
      if (x.key === key) {
        x.key = nkey;

        fs.writeFile(`${this.entry}`, JSON.stringify(this.db), (err) => {
          if (err) throw err;
        });
      }
    });
  }
}

module.exports = ShiftDB;
