var styles = ["Джаз", "блюз"]; alert(styles);
styles.push("Рок-н-Ролл"); alert(styles);
styles[styles.length-2]="Классика"; alert(styles);
alert(styles.shift()); alert(styles);
styles.unshift("Рэп", "Рэгги"); alert(styles);