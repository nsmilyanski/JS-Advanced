(function (){
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        let arr = [];

        for (let i = n; i < this.length; i++) {
            arr.push(this[i]);
        }

        return arr;
    }

    Array.prototype.take(n) = function () {
        let arr = [];

        for (let i = 0; i < n; i++) {
            arr.push(this[i]);
        }
        return arr;
    }

    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }

    Array.prototype.average = function () {
        let e = 0;
        for (let i = 0; i < array.length; i++) {
            e += this[i];
        }
        return e / this.length;
    }
})()