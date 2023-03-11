class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if(this.wines.length >= this.space) {
            throw Error("Not enough space in the cellar.");
        }
        this.wines.push({wineName, wineType, price, paid: false});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
    payWineBottle(wineName, price) {
        let indexOf = this.wines.findIndex(e => e.wineName === wineName);
        if(indexOf < 0) {
            let m = `${wineName} is not in the cellar.`;
            throw Error(m);
        }
        if(this.wines[indexOf].paid) {
            let m = `${wineName} has already been paid.`
            throw Error(m)
        }
        this.wines[indexOf].paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let indexOf = this.wines.findIndex(e => e.wineName === wineName);
        if(indexOf < 0) {
            throw Error(`The wine, you're looking for, is not found.`);
        }
        if(!this.wines[indexOf].paid) {
            let m = `${wineName} need to be paid before open the bottle.`;
            throw Error(m)
        }
        this.wines.splice(indexOf, 1);
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        let sb = '';
        if(wineType == undefined) {
            sb += `You have space for ${this.space - this.wines.length} bottles more.\n`
            sb += `You paid ${this.bill}$ for the wine.\n`
            sb += this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).map(e => 
                e = `${e.wineName} > ${e.wineType} - ${e.paid ? 'Has Paid' : 'Not Paid'}.`)
                .join('\n');
           return sb;
        }else {
            let indexOf = this.wines.findIndex(e => e.wineType === e.wineType);
            if(indexOf < 0) {
                let m = `There is no ${wineType} in the cellar.`
                throw Error(m);
            }
            let f = this.wines[indexOf];

            return `${f.wineName} > ${f.wineType} - ${f.paid ? 'Has Paid' : 'Not Paid'}.`;
        }
    }
}

let selection = new WineSelection(2);
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// assert.equal(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50), "You reserved a bottle of Sauvignon Blanc Marlborough White wine.");
// assert.equal(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120), "You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.");
// expect(() => selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)).to.throw("Not enough space in the cellar.");
